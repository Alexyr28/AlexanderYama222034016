import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrincipalComponent } from './form-principal.component';

describe('FormPrincipalComponent', () => {
  let component: FormPrincipalComponent;
  let fixture: ComponentFixture<FormPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
