import { MigrationInterface, QueryRunner } from "typeorm";

export class cpuData1557595763392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE cpu_data (
      id SERIAL NOT NULL PRIMARY KEY,
      server_id INTEGER REFERENCES servers(id),
      name VARCHAR NOT NULL,
      frequency DOUBLE PRECISION NOT NULL,
      core_amount INTEGER NOT NULL,
      load_percent INTEGER NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE cpu_data;`);
  }
}
