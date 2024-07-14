import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true}, // unique means one email id no duplicate
    password: { type: String, required: true}
});

//const User = mongoose.model("User", userSchema); // below hash logic code is not running it directly export without hashing. so put this code below export

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
      next()
    }
    // hash
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  })

  const User = mongoose.model("User", userSchema); // model name and schema

export default User;