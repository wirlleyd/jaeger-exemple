import { Address } from '../../../shared/dtos/address.dto';

export interface FindPersonDto {
  id: number;
  name: string;
  last_name: string;
  age: number;
  cep: string;
  address: Address;
  created_at: Date;
}
