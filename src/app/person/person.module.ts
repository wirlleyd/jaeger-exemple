import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from '../../database/models/person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonRepository } from '../../repositories/person.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [
    {
      provide: 'personRepository',
      useClass: PersonRepository,
    },
    {
      provide: 'personService',
      useClass: PersonService,
    },
  ],
  controllers: [PersonController],
})
export class PersonModule {}
