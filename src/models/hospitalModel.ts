import mongoose, { model, Schema } from 'mongoose';

export interface HospitalInterface extends mongoose.Document {
    name: { type: String },
    dir: { type: String },
    especialidad: { type: String },
    n_trabs: { type: Number },
    n_pac: { type: Number },
    
}

const hospitalSchema = new Schema({
    name: { type: String, required: true },
    dir: { type: String, required: true },
    especialidad: { type: String, required: true },
    n_trabs: { type: Number, required: true },
    n_pac: { type: Number, required: true },
});

export default model<HospitalInterface>('hospital', hospitalSchema);