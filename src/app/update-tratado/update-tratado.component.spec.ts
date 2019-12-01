import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTratadoComponent } from './update-tratado.component';

describe('UpdateTratadoComponent', () => {
  let component: UpdateTratadoComponent;
  let fixture: ComponentFixture<UpdateTratadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTratadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
