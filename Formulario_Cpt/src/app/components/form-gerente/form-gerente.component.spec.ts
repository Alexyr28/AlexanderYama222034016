import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGerenteComponent } from './form-gerente.component';

describe('FormGerenteComponent', () => {
  let component: FormGerenteComponent;
  let fixture: ComponentFixture<FormGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGerenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
