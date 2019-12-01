import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTratadoComponent } from './list-tratado.component';

describe('ListTratadoComponent', () => {
  let component: ListTratadoComponent;
  let fixture: ComponentFixture<ListTratadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTratadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
