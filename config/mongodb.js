import mongoose from "mongoose";

const connectDB = async () => {
        try {
                await mongoose.connect(process.env.MONGODB_URL, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                });

                mongoose.connection.on('connected', () => {
                        console.log("Database Connected Successfully");
                });

                mongoose.connection.on('error', (err) => {
                        console.error("Database connection error:", err);
                });
        } catch (error) {
                console.error("Initial MongoDB connection error:", error.message);
                process.exit(1); // Exit the app on failure
        }
};

export default connectDB;
