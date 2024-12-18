import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBookTable1734522516832 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`book\` (
                \`id\` INT NOT NULL AUTO_INCREMENT,
                \`name\` VARCHAR(255) NOT NULL,
                \`userId\` BIGINT UNSIGNED NULL,
                PRIMARY KEY (\`id\`),
                FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) 
                ON DELETE CASCADE 
                ON UPDATE CASCADE
            ) ENGINE=InnoDB
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`book\``)
    }

}
