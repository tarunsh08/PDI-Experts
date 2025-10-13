import app from "./app.js";
import connectDB from "./src/db/mongo.js";

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
