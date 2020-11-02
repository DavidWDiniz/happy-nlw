import {Request, Response} from "express";
import {getRepository} from "typeorm";
import * as Yup from "yup";

import orphanageView from "../views/orphanages_view";
import Orphanage from "../models/Orphanage";
import Image from "../models/Image";
import path from "path";
import fs from "fs";

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find({
            where: {accepted: false},
            relations: ["images"],
        });
        return response.json(orphanageView.renderMany(orphanages));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            where: {accepted: false},
            relations: ["images"],
        });
        return response.json(orphanageView.render(orphanage));
    },

    async update(request: Request, response: Response) {
        const {id} = request.params;
        const {name, latitude, longitude, about, whatsapp, instructions, opening_hours, open_on_weekends, accepted} = request.body;

        const orphanagesRepository = getRepository(Orphanage);
        const imagesRepository = getRepository(Image);

        const data = {
            id: Number(id),
            name,
            latitude,
            longitude,
            about,
            whatsapp,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            accepted: accepted === "true",
        };

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {
                orphanage: data,
                path: image.filename
            }
        });

        const schema = Yup.object().shape({
            id: Yup.number().required(),
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            whatsapp: Yup.number(),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required(),
                }),
            ),
        });

        await schema.validate(data, {abortEarly: false});

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);
        await imagesRepository.save(images);

        return response.status(201).json(orphanage);
    },

    async delete(request: Request, response: Response) {
        const {id} = request.params;
        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ["images"],
        });

        orphanage.images.map(async image => {
            fs.readdir(path.join(__dirname, "..", "..", "uploads"), (err) => {
                if (err) {
                    throw err;
                }
                fs.unlink(path.join(__dirname, "..", "..", "uploads", image.path), err => {
                    if (err) throw err;
                });
            });
        });

        await orphanagesRepository.remove(orphanage);
        return response.status(201).json({message: "orphanage deleted"});
    },
}
