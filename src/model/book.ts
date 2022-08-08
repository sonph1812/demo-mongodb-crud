import { model, Schema } from "mongoose";

interface Ibook{
    id?:string;
    name?:string;
    author?:string;
    image?:string;
}
const  bookSchema = new Schema<Ibook>({
    id:String,
    name:String,
    author:String,
    image:String
});
const Book = model<Ibook>('Book',bookSchema);
export {Book};