import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/model/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-form-disco',
  templateUrl: './form-disco.component.html',
  styleUrls: ['./form-disco.component.css']
})
export class FormDiscoComponent implements OnInit {

  constructor(public discoService:DiscoService) { }

  anyadir(titulo:string, interprete:string, anyo:any){
    let disco:Disco = new Disco(0, titulo, interprete, anyo)
    console.log(disco)
    this.discoService.añadirDiscos(disco).subscribe((data) => {
      console.log(data);
      if (data != "-1"){
        alert("Se ha insertado el disco con id: " + data)
      }
      else{
        alert("Error al insertar el disco")
      }
    })
  }

  editar(titulo:string, interprete:string, anyo:any, id:any){
    let disco:Disco = new Disco(id, titulo, interprete, anyo)
    console.log(disco)
    this.discoService.actualizarDisco(disco).subscribe((data) => {
      console.log(data);
  })
}

  borrar(id:any){
    this.discoService.borrarDisco(id).subscribe((data) => {
      console.log(data);
  })
}

  

  ngOnInit(): void {
  }

}
