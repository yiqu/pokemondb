import { PokemonResponse, PokemonShell } from "./pokmeon.model";

export const ITEMS_PER_PAGE: number = 20;

export interface HParams {
  offset: number;
  limit: number;
}

export interface Pagination {
  pageRequested?: number;
  limit?: number;
  pages?: number;
  page?: number;

  nextOffset?: number | null;
  prevOffset?: number;

  firstOffset?: number;
  lastOffset?: number;

  nextPage?: number;
  prevPage?: number;

  totalCount?: number; //count
  nextPageUrl?: string | null; //next
  previousPageUrl?: string | null; //previous
}

export const calculateParams = (current: Pagination, page: PokemonResponse<PokemonShell>): Pagination => {
  const total = page.count;
  const next = page.next;
  const prev = page.previous;

  const pages = Math.ceil(total / ITEMS_PER_PAGE);

  let nextOffset = current.nextOffset ?? 0;
  if (next) {
    const nextparams = new URL(next).searchParams;
    nextOffset = +(nextparams.get("offset") ?? 0);
  }

  let prevOffset = current.prevOffset ?? 0;
  if (prev) {
    const prevparams = new URL(prev).searchParams;
    prevOffset = +(prevparams.get("offset") ?? 0);
  }

  const firstOffset = 0;
  const lastOffset = (pages * ITEMS_PER_PAGE) - ITEMS_PER_PAGE;

  return {
    pageRequested: current.pageRequested,
    limit: current.limit,
    nextOffset,
    prevOffset,
    firstOffset,
    lastOffset,
    pages,
    totalCount: total,
    nextPageUrl: next,
    previousPageUrl: prev
  }
};
