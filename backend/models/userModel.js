const mongoose = require('mongoose');

const userModel = mongoose.Schema(
    {
        name:{type:String , required:true},
        email:{type:String, required:true},
        password:{type}
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;