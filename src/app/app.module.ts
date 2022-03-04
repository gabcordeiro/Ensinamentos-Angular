import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBindingComponentComponent } from './event-binding-component/event-binding-component.component';
import { TwoWayDataBindingComponentComponent } from './two-way-data-binding-component/two-way-data-binding-component.component';
import { ClassAndStyleBindingComponent } from './class-and-style-binding/class-and-style-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { ComponentLifeCycleComponent } from './component-life-cycle/component-life-cycle.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponentComponent,
    TwoWayDataBindingComponentComponent,
    ClassAndStyleBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    ComponentLifeCycleComponent,
    DiretivaNgifComponent,
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
