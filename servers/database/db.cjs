const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/mern_admin";

const connectDb = async () => {

    const URI = `mongodb+srv://kp648027:Kishan@cluster0.spvkpc0.mongodb.net/?retryWrites=true&w=majority`;


    try {
        await mongoose.connect(URI);
        console.log('Database connected succesfully');

    } catch (error) {
        console.log("Error while conneting with database");

    }
};

module.exports = connectDb;
