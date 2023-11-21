import mongoose from "mongoose";


const userschema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    password: { type: String, required: true },
}, { versionKey: false });


const user = mongoose.model('user', userschema);

export default user;

// import mongoose from "mongoose";

// const userSchema = mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     category: { type: String, required: true },
//     password: { type: String, required: true },
// });

// // Hash the password before saving to the database, if needed

// //userSchema.pre('save', async function (next) {
//  //   const user = this;
//   //  // Hash the password here
//   //  user.password = await hashPassword(user.password);
//   //  next();
// //});


// const user = mongoose.model('user', userSchema);

// export default user;



