import { Component } from '@angular/core';
import { PokeapiService } from './../Services/apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Variables para guardar datos y la busqueda
  Buscar: number = 0;
  nameBuscar: string="";
  pokemon: string | undefined;
  pokemon2: string | undefined;
  img: string | undefined;
  img2: string | undefined;
  IDP:number | undefined;
  IDIBuscar: number = 0;
  nameIBuscar: string="";
  item3: string | undefined;
  img3: string | undefined;
  idItem:number | undefined;
  IDITBuscar: number = 0;
  item: string | undefined;
  img4: string | undefined;

  constructor(private api: PokeapiService) {}
  getPokemonDataID(id: number) {
    try {
      let Buscar;
      this.api.getPokemonID(this.Buscar).subscribe((respuesta => { 
        this.pokemon = respuesta.name;
this.img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
        console.log(this.pokemon);
      }));
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataName(name: string) {
    try {
      this.api.getPokemonName(this.nameBuscar).subscribe((respuesta2 => {
        this.pokemon2 = respuesta2.name;
        let id=respuesta2.id;
       this.IDP=id;
this.img2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
        console.log(this.pokemon2);
      }));
    } catch (error) {
      console.log(error);
    }
  } 
  
  getItemName(nombre: string) {
    try {
      this.api.getNameI(this.nameIBuscar).subscribe((respuesta3 => {
        this.item3 = respuesta3.name;
        let id=respuesta3.id;
        this.idItem=id;
this.img3="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item3 + '.png';
        console.log(this.item3);
      }));
    } catch (error) {
      console.log(error);
    }
  }

  getItemID(id: number) {
    try {
      this.api.getItemID(this.IDITBuscar).subscribe((respuesta4 => {
        this.item = respuesta4.name;
        let id=respuesta4.id;
this.img4="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item + '.png';
        console.log(this.item);
      }));
    } catch (error) {
      console.log(error);
    }
  }
}
