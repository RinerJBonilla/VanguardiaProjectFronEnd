import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePropetariosComponent } from './update-propetarios.component';

describe('UpdatePropetariosComponent', () => {
  let component: UpdatePropetariosComponent;
  let fixture: ComponentFixture<UpdatePropetariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePropetariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePropetariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
