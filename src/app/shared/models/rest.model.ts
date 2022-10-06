import { PokemonResponse, PokemonShell } from "./pokmeon.model";

export const ITEMS_PER_PAGE: number = 20;

export interface HParams {
  offset: number;
  limit: number;
}

export interface Pagination {
  offset: number;
  limit: number;
  pages?: number;
  page?: number;

  nextOffset?: number | null;
  prevOffset?: number;

  firstOffset?: number;
  lastOffset?: number;

  totalCount?: number; //count
  nextPageUrl?: string | null; //next
  previousPageUrl?: string | null; //previous
}

export const calculateParams = (current: Pagination, page: PokemonResponse<PokemonShell>): Pagination => {
  const total = page.count;
  const next = page.next;
  const prev = page.previous;

  const nextOffset = (current.offset + current.limit > total ? null : current.offset + current.limit);
  const prevOffset = (current.offset - current.limit < 0 ? 0 : current.offset - current.limit);

  const pages = Math.ceil(total / ITEMS_PER_PAGE);
  const currentPage = (Math.ceil(current.offset / current.limit)) + 1;

  const firstOffset = 0;
  const lastOffset = (pages * ITEMS_PER_PAGE) - ITEMS_PER_PAGE;

  return {
    offset: current.offset,
    limit: current.limit,
    nextOffset,
    prevOffset,
    firstOffset,
    lastOffset,
    pages,
    page: currentPage,
    totalCount: total,
    nextPageUrl: next,
    previousPageUrl: prev
  }
};
