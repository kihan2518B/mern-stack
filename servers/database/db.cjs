const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017/mern_admin";
//this for mongo compass {local} change mern_admin to your database name
const connectDb = async () => {

    const URI = `mongodb+srv://kp648027:Kishan@cluster0.spvkpc0.mongodb.net/?retryWrites=true&w=majority`;
    //this for mongo cloud
//change value of {kp648027} to Your username and {Kishan} to Your password and{cluster0} to Your clustername

    try {
        await mongoose.connect(URI);
        console.log('Database connected succesfully');

    } catch (error) {
        console.log("Error while conneting with database");

    }
};

module.exports = connectDb;
