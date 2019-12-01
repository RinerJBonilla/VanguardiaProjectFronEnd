import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropiedadComponent } from './create-propiedad.component';

describe('CreatePropiedadComponent', () => {
  let component: CreatePropiedadComponent;
  let fixture: ComponentFixture<CreatePropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
