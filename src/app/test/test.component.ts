import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public employeedata = [];

  constructor(private route: Router, private acrouter: ActivatedRoute) { 
    this.employeedata =[
      { 'id':1, 'firstname': 'Dhruv', 'lastname': 'Patel', 'course': 'Java' },
      { 'id':2, 'firstname': 'Twinkle', 'lastname': 'Patel', 'course': 'Java' },
      { 'id':3, 'firstname': 'Pankaj', 'lastname': 'Patel', 'course': 'Java' },
      { 'id':4, 'firstname': 'Trupti', 'lastname': 'Patel', 'course': 'Java' },
      { 'id':5, 'firstname': 'Aarya', 'lastname': 'Patel', 'course': 'Java' }
    ]
  }

  ngOnInit(): void {
  }

  onClick(e: any){
    console.log("Check Routing button CLlicked.");
    this.route.navigate(['/checkrouting',  btoa(JSON.stringify(e))]);

  }

}
