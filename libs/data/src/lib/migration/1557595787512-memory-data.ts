import { MigrationInterface, QueryRunner } from "typeorm";

export class memoryData1557595787512 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE memory_data (
      id SERIAL NOT NULL PRIMARY KEY,
      server_id INTEGER REFERENCES servers(id),
      total_megabytes DOUBLE PRECISION NOT NULL,
      free_megabytes DOUBLE PRECISION NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE memory_data;`);
  }
}
