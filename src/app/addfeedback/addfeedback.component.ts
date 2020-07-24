import { Component, OnInit } from '@angular/core';
import { Employee } from '../checkrouting/checkrouting.component';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {

  e1: Employee;

  constructor(private activatedrt: ActivatedRoute, private route: Router) { 
    this.e1 = JSON.parse(atob(activatedrt.snapshot.params["e"]));
  }

  ngOnInit(): void {
  }

  onSave(){
    alert("Thank You..Data Saved.!");
    this.route.navigate(['/check']);
  }

  onCancel(){
    alert("Are You Sure you want to Cancel this ?");
  }

}
