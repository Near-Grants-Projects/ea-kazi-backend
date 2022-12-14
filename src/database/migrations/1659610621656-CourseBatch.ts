import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CourseBatch1659610621656 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'course_batch',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'course_id',
          type: 'varchar',
          default: null,
        },
        {
          name: 'start_date',
          type: 'timestamp',
          default: null,
        },
        {
          name: 'end_date',
          type: 'timestamp',
          default: null,
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
    });

    await queryRunner.createTable(table, true);

    await queryRunner.createForeignKey(
      'course_batch',
      new TableForeignKey({
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'course',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('course_batch');
  }
}
