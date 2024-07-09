import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

export const collegeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    banner: {type: String},
    location: {type: String, required: true},
    rating: {type: Number, required: true},
}, {
    timestamps: true
})


collegeSchema.plugin(toJSON);

export const CollegeModel = model('model', collegeSchema)
