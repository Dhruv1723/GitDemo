import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CheckroutingComponent } from './checkrouting/checkrouting.component';
import { CheckComponent } from './check/check.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'test', component: TestComponent},
  { path: 'check', component: CheckComponent},
  { path: 'checkrouting/:e', component: CheckroutingComponent},
  { path: 'providefeedback/:e', component: AddfeedbackComponent},
  { path: '', redirectTo: 'home', pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
