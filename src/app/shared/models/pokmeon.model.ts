export interface PokemonResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface PokemonShell {
  name: string;
  url: string;
}
