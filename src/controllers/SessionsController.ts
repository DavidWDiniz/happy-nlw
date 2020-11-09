import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {sign} from "jsonwebtoken";
import {compare} from "bcryptjs";

import authConfig from "../config/auth";
import User from "../models/User";
import usersView from "../views/users_view";

export default {
    async create(request: Request, response: Response) {
        const {email, password} = request.body;
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({email});

        if (!user) {
            throw new Error("User not found");
        }

        const comparePassword = await compare(password, user.password);

        if (!comparePassword) {
            throw new Error("Password does not match");
        }

        const {secret, expiresIn} = authConfig.jwt;

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return response.status(201).json({user: usersView.render(user), token});
    }
}
