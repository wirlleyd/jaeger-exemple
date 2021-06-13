import { generateRandonNumber } from './generateRandonNumber';

export const sleep = (
  ms: number = generateRandonNumber(0, 1000),
): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
