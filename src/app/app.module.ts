import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBindingComponentComponent } from './event-binding-component/event-binding-component.component';
import { TwoWayDataBindingComponentComponent } from './two-way-data-binding-component/two-way-data-binding-component.component';
import { ClassAndStyleBindingComponent } from './class-and-style-binding/class-and-style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponentComponent,
    TwoWayDataBindingComponentComponent,
    ClassAndStyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
