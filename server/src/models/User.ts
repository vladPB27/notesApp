import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        //ref para indicar relacion entre colecciones 
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},
    {
        timestamps: true,
        versionKey: false
    }
);
// .statics una manera de usar funciones
userSchema.methods.encryptPassword = async function(password: string) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model('User', userSchema);