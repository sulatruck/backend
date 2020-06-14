import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddRatingToVote1592084312685
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'votes',
      new TableColumn({
        name: 'rating_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.changeColumn(
      'votes',
      'feedback_id',
      new TableColumn({
        name: 'feedback_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('votes', 'rating_id');

    await queryRunner.changeColumn(
      'votes',
      'feedback_id',
      new TableColumn({
        name: 'feedback_id',
        type: 'uuid',
        isNullable: false,
      }),
    );
  }
}
