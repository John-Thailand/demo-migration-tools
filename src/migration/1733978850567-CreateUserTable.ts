import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1733978850567 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`users\` (
                \`id\` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                \`name\` varchar(100) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
