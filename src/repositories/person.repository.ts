import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPersonRepository } from './interfaces/person.interface.repository';
import { Person } from '../database/models/person.entity';

@Injectable()
export class PersonRepository implements IPersonRepository {
  constructor(
    @InjectRepository(Person)
    private readonly ormRepository: Repository<Person>,
  ) {}

  async findById(id: number): Promise<Person> {
    return await this.ormRepository.findOne(id);
  }
}
