import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateServices1592012190156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'services',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'average_rating',
            type: 'decimal',
            default: 0,
          },
          {
            name: 'latitude',
            type: 'decimal',
            length: '10, 8',
            isNullable: false,
          },
          {
            name: 'longitude',
            type: 'decimal',
            length: '11, 8',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services');
  }
}
