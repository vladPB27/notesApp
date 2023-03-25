import mongoose from "mongoose";

const Schema = mongoose.Schema;

// const ObjectId = mongoose.Types.ObjectId;

const NoteSchema = new Schema({
  title: String,
  description: String,
});

const NoteModel = mongoose.model("Note",NoteSchema);

export default NoteModel