import { Person } from '../../database/models/person.entity';

export interface IPersonRepository {
  findById(id: number): Promise<Person>;
}
