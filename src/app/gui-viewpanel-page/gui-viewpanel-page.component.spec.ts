import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiViewpanelPageComponent } from './gui-viewpanel-page.component';

describe('GuiViewpanelPageComponent', () => {
  let component: GuiViewpanelPageComponent;
  let fixture: ComponentFixture<GuiViewpanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiViewpanelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiViewpanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
