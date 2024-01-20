export type NoteType = {
  _id: string;
  title: string;
  description: string;
  color: string | undefined;
  favorited: boolean;
  createdAt: string;
  updatedAt: string;
};
