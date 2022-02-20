import { QueryInfos } from './queryInfos';

interface IError extends QueryInfos {
  message: string;
  code: number;
}

export type { IError };
