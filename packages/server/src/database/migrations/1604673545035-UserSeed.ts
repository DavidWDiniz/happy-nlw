import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {AdminSeed} from "../seed/user.seed";
import User from "../../models/User";

export class UserSeed1604673545035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository(User).save(AdminSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
