import { Schema, model, Document } from 'mongoose';


const userSchema = new Schema({

    username: {
        type: String,
        required: [true,'The username is required']
    },
    password: {
        type: String,
        required: [ true,'The password is required']
    }

});

interface IUser extends Document {
    username: string;
    password: string;
    
}

export const User = model<IUser>('user', userSchema);