# STUST HUB
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
```
STUST-HUB
├─ .gitignore
├─ app.vue
├─ assets
│  └─ css
│     └─ main.css
├─ components
│  ├─ Breadcrumb.vue
│  ├─ club
│  ├─ ColorModeToggle.vue
│  ├─ course
│  │  ├─ CourseDetailsContent.vue
│  │  ├─ CourseDetailsInfo.vue
│  │  ├─ CourseFilterForm.vue
│  │  ├─ CourseFilterOption.vue
│  │  ├─ CourseFilterTimeOptions.vue
│  │  ├─ CourseList.vue
│  │  ├─ CourseListCaption.vue
│  │  ├─ CourseListViewSwitcher.vue
│  │  └─ CourseSemesterSelector.vue
│  ├─ Footer.vue
│  └─ Header.vue
├─ composables
│  ├─ useCourseDetailsData.js
│  ├─ useCourseDetailsFields.js
│  ├─ useCourseFilterForm.js
│  └─ useCourseRoutes.js
├─ layouts
│  ├─ course.vue
│  └─ default.vue
├─ nuxt.config.ts
├─ package.json
├─ pages
│  ├─ About.vue
│  ├─ course
│  │  └─ [year]
│  │     └─ [semester]
│  │        ├─ class
│  │        │  └─ [class].vue
│  │        ├─ Class.vue
│  │        ├─ instructor
│  │        │  └─ [instructor].vue
│  │        ├─ Instructor.vue
│  │        ├─ language
│  │        │  └─ [language].vue
│  │        ├─ Language.vue
│  │        ├─ location
│  │        │  └─ [buildingName]-[roomNumber].vue
│  │        ├─ Location.vue
│  │        ├─ schedule
│  │        │  ├─ period
│  │        │  │  └─ [periodNumber].vue
│  │        │  ├─ Period.vue
│  │        │  ├─ weekday
│  │        │  │  └─ [weekday].vue
│  │        │  └─ Weekday.vue
│  │        ├─ Schedule.vue
│  │        ├─ Search.vue
│  │        └─ [courseCode].vue
│  └─ index.vue
├─ plugins
├─ pnpm-lock.yaml
├─ public
│  └─ favicon.ico
├─ README.md
├─ server
│  ├─ api
│  │  └─ courses.js
│  ├─ data
│  │  └─ course
│  │     ├─ 112
│  │     │  ├─ 1
│  │     │  │  ├─ 112-1_courses.json
│  │     │  │  └─ details
│  │     │  └─ 2
│  │     │     ├─ 112-2_courses.json
│  │     │     ├─ 112-2_courses_summary_processed.json
│  │     │     └─ details
│  │     └─ 113
│  │        └─ 1
│  │           ├─ 113-1_courses.json
│  │           └─ details
│  └─ tsconfig.json
├─ static
├─ stores
│  ├─ useCourseFilterStore.js
│  ├─ useCourseListViewModeStore.js
│  └─ useCourseSemesterStore.js
├─ tailwind.config.js
└─ tsconfig.json

```
