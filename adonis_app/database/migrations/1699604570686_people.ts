import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  //モデルに対応するテーブル名
  protected tableName = 'people'

  //バージョンを上げる（更新する）処理
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.integer('age')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  //バージョンを下げる（更新を取消す）処理
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
