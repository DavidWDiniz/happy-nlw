import {Request, Response} from "express";
import {getRepository} from "typeorm";
import * as Yup from "yup";
import {hash} from "bcryptjs";

import usersView from "../views/users_view";
import User from "../models/User";

export default {
    async index(request: Request, response: Response) {
        const usersRepository = getRepository(User);
        const users = await usersRepository.find();
        return response.json(usersView.renderMany(users));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const usersRepository = getRepository(User);
        const user = await usersRepository.findOneOrFail(id);
        return response.json(usersView.render(user));
    },

    async create(request: Request, response: Response) {
        const {name, email, password} = request.body;

        const usersRepository = getRepository(User);

        const hashedPassword = await hash(password, 8);

        const data = {
            name,
            email,
            password: hashedPassword,
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        await schema.validate(data, {abortEarly: false});

        const user = usersRepository.create(data);

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}
