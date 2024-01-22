"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import Note from "./models/note";
import mongooseConnect from "./database/mongoose";
import { NoteType } from "./definitions";

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  color: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const CreateNote = FormSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const EditNote = FormSchema.omit({
  color: true,
  createdAt: true,
  updatedAt: true,
});

export default async function createNote(formData: FormData) {
  // eslint-disable-next-line no-unused-vars
  const { title, description, color } = CreateNote.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    favorited: false,
    color: "",
  });

  try {
    await mongooseConnect();

    await Note.create({
      title: title,
      description: description,
      favorited: false,
      color: color,
    })
      .then(() => {})
      .catch((err: any) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    return { messsage: "Database error: Failed to create note" };
  }

  revalidatePath("/");
}

export async function editNote(formData: FormData) {
  // eslint-disable-next-line no-unused-vars
  const { title, description, id } = EditNote.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    id: formData.get("_id"),
  });

  try {
    await mongooseConnect();
    await Note.updateOne(
      { _id: id },
      {
        title: title,
        description: description,
      }
    )
      .then(() => {})
      .catch((err: any) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    return { messsage: "Database error: Failed to create note" };
  }

  revalidatePath("/");
}

export async function getFilteredNotes(query: string) {
  try {
    let response;
    await mongooseConnect();
    if (query) {
      response = await Note.find({ title: { $regex: query, $options: "i" } });
    } else {
      response = await Note.find({});
    }
    const data = JSON.parse(JSON.stringify(response));
    return data.map((note: NoteType) => note);
  } catch (error) {
    console.log(error);
    return { messsage: "Database error: Failed to create note" };
  }
}

export async function deleteNote(_id: string) {
  try {
    await mongooseConnect();
    await Note.findOneAndDelete({ _id: _id });
  } catch (error) {
    console.log(error);
    // return { messsage: "Database error: Failed to delete note" };
  }

  revalidatePath("/");
}

export async function favoriteNote(_id: string, favorite: boolean) {
  try {
    console;
    await mongooseConnect();
    await Note.updateOne({ _id: _id }, { favorited: favorite });
  } catch (error) {
    console.log(error);
    // return { messsage: "Database error: Failed to delete note" };
  }

  revalidatePath("/");
}

export async function setColor(_id: string, color: string) {
  try {
    console;
    await mongooseConnect();
    await Note.updateOne({ _id: _id }, { color: color });
  } catch (error) {
    console.log(error);
    // return { messsage: "Database error: Failed to delete note" };
  }

  revalidatePath("/");
}
