import { NoteType } from "@/app/lib/definitions"
import TaskBox from "../taskBox/taskBox"
import { getNotes } from "@/app/lib/actions";



export default  async function HomeWrapper() {
    const notes = await getNotes();
    const nonFavoriteNotes = notes.filter((note : NoteType) => note.favorited === false)
    const favoriteNotes = notes.filter((note : NoteType) => note.favorited === true)

    return ( <>
        
 
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