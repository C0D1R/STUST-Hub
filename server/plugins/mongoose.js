import mongoose from 'mongoose'

export default async () => {
    const config = useRuntimeConfig()
    const mongoDBUri = config.mongoDBUri

    try {
        await mongoose.connect(mongoDBUri)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}