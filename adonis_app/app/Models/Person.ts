import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Parson extends BaseModel{

//primaryキー
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public email:string

  @column()
  public age:number

  //作成日時
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  //更新日時
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
