import { MigrationInterface, QueryRunner } from "typeorm";

export class actions1557595742971 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE actions (
      id SERIAL NOT NULL PRIMARY KEY,
      type VARCHAR NOT NULL,
      server_id INTEGER REFERENCES servers(id),
      user_id INTEGER REFERENCES users(id),
      is_completed BOOLEAN NOT NULL,
      completed_at TIMESTAMP WITH TIME ZONE,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE actions;`);
  }
}
