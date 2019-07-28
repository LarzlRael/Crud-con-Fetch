import { Request, Response } from "express";
import hospitalModel from '../models/hospitalModel'
import { validationResult } from 'express-validator';
class IndexController {

    public async index(req: Request, res: Response) {

        const allData = await hospitalModel.find().sort({ _id: -1 });

        res.json(allData)
    }
    public async create(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const { name, dir, especialidad, n_trabs, n_pac } = req.body;
        const newData = new hospitalModel({ name, dir, especialidad, n_trabs, n_pac });
        await newData.save()
        res.json({ message: 'true' })
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;


        await hospitalModel.findByIdAndDelete(id);
        res.json({ message: 'Eliminado' })

    }
    public async edit(req: Request, res: Response) {
        const { id } = req.params;
        await hospitalModel.findByIdAndUpdate({ _id: id }, req.body)
        res.json({ edit: 'true' })
    }

}
export const indexController = new IndexController();