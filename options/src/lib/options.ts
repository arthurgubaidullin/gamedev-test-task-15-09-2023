export interface Options {
  readonly rows: number;
  readonly columns: number;
}

export const create = (rows: number, columns: number): Options =>
  ({
    rows,
    columns,
  } as const);
