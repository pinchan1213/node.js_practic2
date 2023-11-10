import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person from 'App/Models/Person'

export default class PersonSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Person.createMany([
      {
        name:'taro',
        email:'taro@email.com',
        age:39,
      },
      {
        name:'hanako',
        email:'hanako@email.com',
        age:28,
      },
      {
        name:'sachiko',
        email:'sachiko@email.com',
        age:17,
      },
    ]);
  }
}
