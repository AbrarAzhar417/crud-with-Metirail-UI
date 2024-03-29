import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEmployeComponent } from './create-edit-employe.component';

describe('CreateEditEmployeComponent', () => {
  let component: CreateEditEmployeComponent;
  let fixture: ComponentFixture<CreateEditEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEditEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
