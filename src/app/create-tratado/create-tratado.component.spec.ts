import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTratadoComponent } from './create-tratado.component';

describe('CreateTratadoComponent', () => {
  let component: CreateTratadoComponent;
  let fixture: ComponentFixture<CreateTratadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTratadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
