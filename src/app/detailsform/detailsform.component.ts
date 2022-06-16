import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainserviceService } from '../service/mainservice.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent implements OnInit {
  @Output() update= new EventEmitter<object>()
  @Input() student:any = new Student();
  constructor(private service:MainserviceService, private location: Location, private router:Router) { 

  }

  ngOnInit(): void {
  }

  

  addNewStudent(){
    this.student =new Student();
  }

  home(){
    this.location.back()
  }

  updateform(obj:any){
    this.service.SaveData(obj);
  }
}

export class Student{
  name: any = "";
  cls: any = "";
  phone: any = "";
}


