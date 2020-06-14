import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeDualRatingsToStars1592085358884
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ratings', 'value');

    await queryRunner.addColumn(
      'ratings',
      new TableColumn({
        name: 'stars',
        type: 'integer',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('ratings', 'stars');

    await queryRunner.addColumn(
      'ratings',
      new TableColumn({
        name: 'value',
        type: 'boolean',
        isNullable: false,
      }),
    );
  }
}
