import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiViewpanelFuncionarioComponent } from './gui-viewpanel-funcionario.component';

describe('GuiViewpanelFuncionarioComponent', () => {
  let component: GuiViewpanelFuncionarioComponent;
  let fixture: ComponentFixture<GuiViewpanelFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiViewpanelFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiViewpanelFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
