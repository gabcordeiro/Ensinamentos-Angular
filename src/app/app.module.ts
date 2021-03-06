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
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared//highlight.directive';
import { GuiViewpanelFuncionarioComponent } from './gui-viewpanel-funcionario/gui-viewpanel-funcionario.component';
import { GuiViewpanelPageComponent } from './gui-viewpanel-page/gui-viewpanel-page.component';
import { BancoFuncionarioDirectiveDirective } from './shared/banco-funcionario-directive.directive';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

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
    DiretivaNgSwitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    GuiViewpanelFuncionarioComponent,
    GuiViewpanelPageComponent,
    BancoFuncionarioDirectiveDirective,
    ExemploPipesComponent,
    CamelCasePipe,
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
