import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pokemonList: any[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=30').subscribe(response => {
      response.results.forEach((result: any) => {
        this.http.get(result.url).subscribe((pokemon: any) => {
          this.pokemonList.push(pokemon);
        });
      });
    });
    
  }
}


/*

  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    pokemonList: any[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=9').subscribe(response => {
        response.results.forEach((result: any) => {
          this.http.get(result.url).subscribe((pokemon: any) => {
            this.pokemonList.push(pokemon);
          });
        });
      });
    }
  }


*/


/*

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jose-juarez';

*/