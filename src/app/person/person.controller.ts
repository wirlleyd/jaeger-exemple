import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(
    @Inject('personService')
    private readonly personService: PersonService,
  ) {}

  @Get()
  async findRandonPerson() {
    return await this.personService.findById();
  }
}
