import { Component } from '@angular/core';
import { Residence } from '../Model/Residence';
import { Apartment } from '../Model/Appartement';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  residence!:Residence
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"AppartementS+1","residence":this.listResidences[0] },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"AppartementS+2","residence":this.listResidences[0] },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"AppartementS+3","residence":this.listResidences[1]}];
     apartments:Apartment[]=[];
     favoritesAprt:Apartment[]=[];
     surfaceF!: number
  showAprt(i:Residence){
    this.apartments = this.listApartments.filter(apartment => apartment.residence === i);
  this.residence = i

}
addToFavorites(a:Apartment){
  if (!this.favoritesAprt.includes(a)) {
    this.favoritesAprt.push(a);
  }
}
filterBySurface(surface: number) {
  if (surface !== null) {
    this.apartments = this.listApartments.filter(apartment => apartment.surface === surface);
  } else {
    this.apartments = this.listApartments.filter(apartment => apartment.residence === this.residence);
  }
}

}
