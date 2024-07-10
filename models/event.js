import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: {type: String, required:true},
    description: {type: String}, //, required:true
    collegeId: {type:Types.ObjectId, ref: 'College'},//, required:true
    location: {type:String, required:true},
    date: {type:String, required:true},
    tags: {type:String},
    type: [{type:String, enum:['online', 'offline']}],
   banner: {type:String, required:true}  // it is an image upload
},
  {
    timestamps: true,
  }
);

eventSchema.plugin(toJSON);

export const eventModel = model("event", eventSchema);
