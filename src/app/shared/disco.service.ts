import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disco } from '../model/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url= "http://localhost:3000/discos";
  constructor(private http:HttpClient) { }

  
  obtenerDisco(discos_id:number){
    return this.http.get(this.url + "?id=" + discos_id)
  }

  añadirDiscos(newDisco:Disco){
    return this.http.post(this.url, newDisco)
  }

  actualizarDisco(disco:Disco){
    return this.http.put(this.url + "?id=" + disco.discos_id, disco)
  }

  borrarDisco(id:number){
    return this.http.delete(this.url + "?id=" + id)
  }


}
