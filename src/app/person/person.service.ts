import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IPersonRepository } from '../../repositories/interfaces/person.interface.repository';
import { findAddressByCep } from '../../helpers/findAddressByCep';
import { generateRandonNumber } from '../../helpers/generateRandonNumber';
import { sleep } from '../../helpers/sleep';
import { FindPersonDto } from './dtos/FindPersonDto.dto';

@Injectable()
export class PersonService {
  constructor(
    @Inject('personRepository')
    private readonly personRepository: IPersonRepository,
  ) {}

  async findById(): Promise<FindPersonDto> {
    const id = generateRandonNumber(1, 5);
    await sleep();
    const person = await this.personRepository.findById(id);
    await sleep();
    if (!person) {
      throw new NotFoundException('Person not founded');
    }
    const address = await findAddressByCep(person.cep);

    const response: FindPersonDto = {
      ...person,
      address,
    };
    await sleep();
    return response;
  }
}
