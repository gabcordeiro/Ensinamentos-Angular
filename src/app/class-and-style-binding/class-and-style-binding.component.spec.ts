import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAndStyleBindingComponent } from './class-and-style-binding.component';

describe('ClassAndStyleBindingComponent', () => {
  let component: ClassAndStyleBindingComponent;
  let fixture: ComponentFixture<ClassAndStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAndStyleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAndStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
