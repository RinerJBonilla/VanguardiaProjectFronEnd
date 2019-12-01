import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePropiedadComponent } from './update-propiedad.component';

describe('UpdatePropiedadComponent', () => {
  let component: UpdatePropiedadComponent;
  let fixture: ComponentFixture<UpdatePropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
