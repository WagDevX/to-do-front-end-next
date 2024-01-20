"use client"
import { NoteType } from "@/app/lib/definitions"
import TaskBox from "../taskBox/taskBox"
import CreateNoteTaskBox from "../taskBox/createTaskBox"
import { useState } from "react"
import Header from "./header"

interface Props {
    notes: NoteType[]
}

export default function HomeWrapper({notes} : Props) {
    const [filteredNotes, setFilderedNotes] = useState<NoteType[]>([])
    const nonFavoriteNotes = filteredNotes.length === 0 ?  notes.filter((note : NoteType) => note.favorited === false) : filteredNotes.filter((note : NoteType) => note.favorited === false)
    const favoriteNotes = filteredNotes.length === 0 ? notes.filter((note : NoteType) => note.favorited === true) : filteredNotes.filter((note : NoteType) => note.favorited === true)

    const handleSearch = ( title: string) => {
      setFilderedNotes(notes.filter((note : NoteType) => note.title.includes(title)))
      }
    return ( <>
        <Header handleSearch={handleSearch} />
        <div className="mt-10 flex justify-center sm:px-12">
        <CreateNoteTaskBox />
      </div>
        <div className="mt-10 grid gap-10 mb-20 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
      {favoriteNotes.map((note: NoteType) => {
          return <TaskBox key={note._id} note={note} />;
        })}
        {nonFavoriteNotes.map((note: NoteType) => {
          return <TaskBox key={note._id} note={note} />;
        })}
      </div>
      </>
    )
}