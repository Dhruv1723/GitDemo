import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export class Employee{
  public id: number;
  public firstname: string;
  public lastname: string;
  
  constructor(id: number, firstname: string, lastname: string){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
  }

}


@Component({
  selector: 'app-checkrouting',
  templateUrl: './checkrouting.component.html',
  styleUrls: ['./checkrouting.component.css']
})
export class CheckroutingComponent implements OnInit {

  e: Employee;
 

  constructor(private activatedrt: ActivatedRoute, private route: Router) {
    this.e = JSON.parse(atob(activatedrt.snapshot.params["e"]));
   
   }

  ngOnInit(): void {
  }
  onCancel(){
    alert("Are You Sure you want to Cancel this ?");
    this.route.navigate(['/test']);

  }

}
