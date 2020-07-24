import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { CheckroutingComponent } from './checkrouting/checkrouting.component';
import { AddfeedbackComponent } from './addfeedback/addfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    CheckComponent,
    HomeComponent,
    CheckroutingComponent,
    AddfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
