import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  pic: string;
  createdAt?: Date;
  updatedAt?: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic : {type : String, default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
  },
  {
    timestamps: true,
  }
);


userSchema.methods.matchPassword = async function (enteredPassword : string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



export const User = mongoose.model<IUser>("User", userSchema);
