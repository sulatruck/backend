import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateFeedbacks1592057043334
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'feedbacks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'subject',
            type: 'varchar',
            length: '60',
            isNullable: false,
          },
          {
            name: 'body',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'author_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'like_count',
            type: 'integer',
            default: 0,
          },
          {
            name: 'rating',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'anonymous',
            type: 'boolean',
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

    await queryRunner.createForeignKey(
      'feedbacks',
      new TableForeignKey({
        name: 'FeedbackAuthor',
        columnNames: ['author_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('feedbacks', 'FeedbackAuthor');

    await queryRunner.dropTable('feedbacks');
  }
}
