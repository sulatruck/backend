import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateAttachments1592067399648
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attachments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'directory',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'filename',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'feedback_id',
            type: 'uuid',
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
      'attachments',
      new TableForeignKey({
        name: 'AttachmentFeedback',
        columnNames: ['feedback_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'feedbacks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('attachments', 'AttachmentFeedback');

    await queryRunner.dropTable('attachments');
  }
}
