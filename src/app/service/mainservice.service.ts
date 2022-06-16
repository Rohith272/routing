import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor() { }

  listarray =[{"name":"","cls":"","phone":""}];

  GetData(){
    return this.listarray;
  }

  SaveData(input:any){
    this.listarray.push(input);
    console.log(this.listarray)
  }
}
