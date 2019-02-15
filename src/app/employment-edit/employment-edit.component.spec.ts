import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentEditComponent } from './employment-edit.component';

describe('EmploymentEditComponent', () => {
  let component: EmploymentEditComponent;
  let fixture: ComponentFixture<EmploymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
