const AdminSeed =
    {
        id: 1,
        name: "admin",
        email: "admin@happy.com",
        password: "$2a$08$XnbZfvemBMVhL4D1cS3N.OWtdoEN.TTRzqutxquWvUCljh/5DOjU.",
    };

import {createConnection, getRepository} from "typeorm";
import User from "../../models/User";

(async () => {
    const conn = await createConnection();
    const usersRepository = getRepository(User);
    await usersRepository.save(AdminSeed);
    await conn.close();
})();
