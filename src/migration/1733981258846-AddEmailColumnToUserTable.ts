import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumnToUserTable1733981258846 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`users\`
            ADD \`email\` VARCHAR(255) NOT NULL UNIQUE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`users\`
            DROP COLUMN \`email\`
        `);
    }
}
