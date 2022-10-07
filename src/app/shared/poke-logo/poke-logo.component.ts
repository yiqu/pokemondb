import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-poke-logo',
  templateUrl: 'poke-logo.component.html',
  styleUrls: ['./poke-logo.component.scss']
})
  export class PokemonLogoComponent implements OnInit {

  @Input()
  logoClass: string = "";

  logoUrl: string = "assets/img/poke-logo.png";

  constructor() { }

  ngOnInit() { }
}
