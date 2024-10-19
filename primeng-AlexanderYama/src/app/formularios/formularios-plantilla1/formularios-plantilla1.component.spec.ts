import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosPlantilla1Component } from './formularios-plantilla1.component';

describe('FormulariosPlantilla1Component', () => {
  let component: FormulariosPlantilla1Component;
  let fixture: ComponentFixture<FormulariosPlantilla1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosPlantilla1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosPlantilla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
