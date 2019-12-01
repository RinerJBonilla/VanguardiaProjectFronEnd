import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropetarioComponent } from './list-propetario.component';

describe('ListPropetarioComponent', () => {
  let component: ListPropetarioComponent;
  let fixture: ComponentFixture<ListPropetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
