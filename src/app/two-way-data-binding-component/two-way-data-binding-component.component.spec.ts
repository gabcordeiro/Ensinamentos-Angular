import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingComponentComponent } from './two-way-data-binding-component.component';

describe('TwoWayDataBindingComponentComponent', () => {
  let component: TwoWayDataBindingComponentComponent;
  let fixture: ComponentFixture<TwoWayDataBindingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
