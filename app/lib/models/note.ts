const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    color: {
      type: "string",
      required: false,
    },
    favorited: {
      type: "boolean",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);

export default Note;
