import mongoose, { model, Schema } from 'mongoose';

export interface HospitalInterface extends mongoose.Document {
    name: { type: String },
    dir: { type: String },
    especialidad: { type: String },
    n_trabs: { type: Number },
    n_pac: { type: Number },
    create_at: { type: Date }
}

const hospitalSchema = new Schema({
    name: { type: String, required: true },
    dir: { type: String, required: true },
    especialidad: { type: String, required: true },
    n_trabs: { type: Number, required: true },
    n_pac: { type: Number, required: true },
    create_at: { type: Date, default: Date.now }

});

export default model<HospitalInterface>('hospital', hospitalSchema);