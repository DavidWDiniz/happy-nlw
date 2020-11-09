import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrphanages1602597719115 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "latitude",
                    type: "varchar",
                },
                {
                    name: "longitude",
                    type: "varchar",
                },
                {
                    name: "about",
                    type: "text",
                },
                {
                    name: "whatsapp",
                    type: "varchar",
                },
                {
                    name: "instructions",
                    type: "text",
                },
                {
                    name: "opening_hours",
                    type: "varchar",
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false,
                },
                {
                    name: "accepted",
                    type: "boolean",
                    default: false,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orphanages");
    }

}