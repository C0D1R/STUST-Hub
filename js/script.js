var lang = document.getElementsByName("language");
var sem = document.getElementsByName("semester");
var dept = document.getElementsByName("department");
var courty = document.getElementsByName("course_type");

var btn = document.getElementById("btn");
var list = document.getElementById("list");

var langValue = "";
var semValue = "";
var deptValue = "";
var courtyValue = [];

function getRadioBoxValue(RadioBoxValue) {
    for(var i = 0, len = RadioBoxValue.length; i < len; i++) {
        if(RadioBoxValue[i].checked) {
            return RadioBoxValue[i].value;
        }
    }
}
function getRadioBoxValue_coursetype(courty) {
    var j = 0;
    for(var i = 0, len = courty.length; i < len; i++) {
        if(courty[i].checked) {
            courtyValue[j] = courty[i].value;
            j++;
        }
    }
    return courtyValue;
}

window.onload = function() {
    if(sessionStorage.getItem("listHTML")) {
        list.innerHTML = sessionStorage.getItem("listHTML");
    }
}

btn.addEventListener("click", function() {
    sessionStorage.clear();
    list.innerHTML = "";
    courtyValue = [];

    langValue = getRadioBoxValue(lang);
    semValue = getRadioBoxValue(sem);
    deptValue = getRadioBoxValue(dept);
    getRadioBoxValue_coursetype(courty);

    function getJson(url) {
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.send(null);
        request.onload = function() {
            if(request.status == 200) {
                var json = JSON.parse(request.responseText);
                addlist_course(json);
            }
            function addlist_course(json) {
                var html = "";
                for(var k = 0, len_json = json.length; k < len_json; k++) {
                    html += `
                            <div>
                                <div style="width: 30%; padding-left: 5%;" class="float datalistli">${json[k].list_name}</div>
                                <div style="width: 7%;" class="float datalistli">${json[k].list_credit}</div>
                                <div style="width: 18%;" class="float datalistli textsetmid">${json[k].list_lecturer}</div>
                                <div style="width: 13%;" class="float datalistli textsetmid">${json[k].list_type}</div>
                                <div style="width: 17%;" class="float datalistli textsetmid">${json[k].list_field_class}</div>
                                <div style="width: 10%;" class="float datalistli">${json[k].list_time}</div>
                                <div style="clear: both;"></div>
                            </div>
                            `;
                }
                list.innerHTML += html;
                sessionStorage.setItem("listHTML", list.innerHTML);
            }
        }
    }
    for(var i = 0, len_courtyValue = courtyValue.length; i < len_courtyValue; i++) {
        console.log(courtyValue[i]);
        if(i == 0) {
            addlist_course_th();
        }
        if(courtyValue[i] != "general_elective_subject") {
            var url = "https://c0d1r.github.io/STUST-timetable/json/" + semValue + "-" + deptValue + "_" + courtyValue[i] + ".json";
            getJson(url);
        }
        else {
            general_course_list = judge_academy();
            for(var j = 0, len_general_course_list = general_course_list.length; j < len_general_course_list; j++) {
                var url = "https://c0d1r.github.io/STUST-timetable/json/" + semValue + "-" + general_course_list[j] + ".json";
                getJson(url);
            }
        }
    }
});

function addlist_course_th() {
    list.innerHTML += ` <div>
                            <div style="width: 30%; padding-left: 5%;" class="float datalistlith">課程名稱</div>
                            <div style="width: 7%;" class="float datalistlith">學分</div>
                            <div style="width: 18%;" class="float datalistlith">任課教師</div>
                            <div style="width: 13%;" class="float datalistlith">課程類別</div>
                            <div style="width: 17%;" class="float datalistlith">班級／領域</div>
                            <div style="width: 10%;" class="float datalistlith">時間</div>
                            <div style="clear: both;"></div>
                        </div>
                        `;
}

function judge_academy() {
    switch(deptValue) {
        case "ee":
        case "mech":
        case "eecs":
        case "oe":
        case "csie":
        case "chem":
        case "bio":
        case "vc":
        case "ic":
        case "mes":
        case "cpd":
        case "pmi":
            return ["humanities_and_arts", "social_science", "comprehensive_practice"];
        case "imi":
        case "ib":
        case "accinfo":
        case "ba":
        case "fin":
        case "leisure":
        case "mim":
        case "mis":
        case "hm":
        case "english":
        case "japan":
        case "childcare":
        case "ss":
            return ["humanities_and_arts", "natural_science", "comprehensive_practice"];
        default:
            return ["humanities_and_arts", "social_science", "natural_science", "comprehensive_practice"];
    }
}