import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'pokemonTypeColorHex',
  pure: true
})
export class PokemonTypeColorHex implements PipeTransform {

  @memo()
  transform(type: string): any {
    let res = "#ccc";
    if (type) {
      switch (type) {
        case "normal": {
          res = "#A8A878";
          break;
        }
        case "fighting": {
          res = "#C03028";
          break;
        }
        case "flying": {
          res = "#A890F0";
          break;
        }
        case "poison": {
          res = "#A040A0";
          break;
        }
        case "ground": {
          res = "#E0C068";
          break;
        }
        case "rock": {
          res = "#B8A038";
          break;
        }
        case "bug": {
          res = "#A8B820";
          break;
        }
        case "ghost": {
          res = "#705898";
          break;
        }
        case "steel": {
          res = "#B8B8D0";
          break;
        }
        case "fire": {
          res = "#F08030";
          break;
        }
        case "water": {
          res = "#6890F0";
          break;
        }
        case "grass": {
          res = "#78C850";
          break;
        }
        case "electric": {
          res = "#F8D030";
          break;
        }
        case "psychic": {
          res = "#F85888";
          break;
        }
        case "ice": {
          res = "#98D8D8";
          break;
        }
        case "dragon": {
          res = "#7038F8";
          break;
        }
        case "dark": {
          res = "#705848";
          break;
        }
        case "fairy": {
          res = "#EE99AC";
          break;
        }
      }
    }
    return res;
  }

}
