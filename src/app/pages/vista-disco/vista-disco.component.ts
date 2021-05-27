import { Component, OnInit } from '@angular/core';
import { Disco } from 'src/app/model/disco';
import { DiscoService } from 'src/app/shared/disco.service';

@Component({
  selector: 'app-vista-disco',
  templateUrl: './vista-disco.component.html',
  styleUrls: ['./vista-disco.component.css']
})
export class VistaDiscoComponent implements OnInit {

  public discos:Disco[]
  constructor(public discoService:DiscoService) {
    
  }

  obtenerDiscos(id:any){
    this.discoService.obtenerDisco(id).subscribe((data:Disco[]) =>{
      this.discos = data;
      console.log(id)
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
