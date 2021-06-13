import axios from 'axios';
import { Address } from '../shared/dtos/address.dto';

const api = axios.create({
  baseURL: 'https://viacep.com.br',
  responseType: 'json',
});

export async function findAddressByCep(cep: string): Promise<Address> {
  const { data } = await api.get<Address>(`/ws/${cep}/json/`);
  return data;
}
