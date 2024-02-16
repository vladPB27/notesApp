import { model, Schema } from "mongoose";

const noteSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Note',noteSchema)