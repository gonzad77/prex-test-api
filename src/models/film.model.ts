import { Schema, model, Document } from 'mongoose';


const filmSchema = new Schema({

    title: {
        type: String,
        required: [true,'The title is required']
    },
    description: {
        type: String,
        required: [ true,'The description is required']
    },
    stars: {
        type: Number,
        unique: false,
        required:[true,'The rate is required']
    },
    src: {
        type: String,
    },
    date: {
        type: Date,
        required: [true,'The date is required']
    }

});

interface IFilm extends Document {
    title: string;
    description: string;
    stars: number;
    date: Date;
    src?: string
    
}

export const Film = model<IFilm>('Film', filmSchema);