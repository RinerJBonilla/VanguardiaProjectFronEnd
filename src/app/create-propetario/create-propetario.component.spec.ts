import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropetarioComponent } from './create-propetario.component';

describe('CreatePropetarioComponent', () => {
  let component: CreatePropetarioComponent;
  let fixture: ComponentFixture<CreatePropetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePropetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePropetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
