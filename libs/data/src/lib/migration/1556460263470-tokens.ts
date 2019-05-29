import { MigrationInterface, QueryRunner } from "typeorm";

export class tokens1556460263470 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE tokens (
      id SERIAL NOT NULL PRIMARY KEY,
      token VARCHAR NOT NULL,
      expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
      user_id INTEGER REFERENCES users(id),
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE tokens;`);
  }
}
