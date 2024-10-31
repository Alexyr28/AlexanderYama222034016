import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicenciaComponent } from './form-licencia.component';

describe('FormLicenciaComponent', () => {
  let component: FormLicenciaComponent;
  let fixture: ComponentFixture<FormLicenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLicenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
