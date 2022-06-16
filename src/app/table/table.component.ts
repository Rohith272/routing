import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { Student } from '../detailsform/detailsform.component';
import { MainserviceService } from '../service/mainservice.service';
import { Router } from '@angular/router';

export interface select{
  name: string;
  cls: string;
  phone: string; 
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  //@ViewChild(DetailsformComponent)viewdata !:DetailsformComponent;
  title = 'test';
  listarray =[{"name":"","cls":"","phone":""}];
  elem={"name":"","cls":"","phone":""}
  row: any;
  currentStudent : any = new Student();

  constructor(private service:MainserviceService, private location:Location, private router:Router){
    this.listarray=this.service.GetData();
    this.dataSource = new MatTableDataSource<any>(this.listarray);

  }
 

  
  home(){
    this.location.back()
  }

   

   public dataSource =new MatTableDataSource<any>([]);
   displayedColumns: string[]=['name','cls','phone'];
   clickedRows = new Set<select>();
   


   send(obj:any){
      this.currentStudent=obj;
   }

}
