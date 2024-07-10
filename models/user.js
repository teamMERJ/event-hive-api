import {Schema, model} from mongoose
import { toJSON } from "@reis/mongoose-to-json"


const userSchema = new Schema({
 name: {type:String, required:true},
 username: {type:String, required:true, unique:true},
 email:{type:String, required: true, unique:true},
 password:{type:String, required:true},
 avatar: {type:String}
},{
    timestamps:true
})

userSchema.plugin(toJSON)
export const userModel = model('user', userSchema)

