export type PaginationInput = {
  offset?: number;
  limit?: number;
}

export type PaginatedResult<T> = PaginationInput & {
  data: T[];
  total: number;
}

export function paginate<T>(data: T[], input: PaginationInput = {}): PaginatedResult<T> {
  const { offset = 0, limit = 10 } = input;
  const total = data.length;
  const paginatedData = data.slice(offset, offset + limit);

  return {
    data: paginatedData,
    total,
    offset,
    limit
  }
}