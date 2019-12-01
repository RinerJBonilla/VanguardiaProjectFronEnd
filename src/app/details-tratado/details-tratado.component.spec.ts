import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTratadoComponent } from './details-tratado.component';

describe('DetailsTratadoComponent', () => {
  let component: DetailsTratadoComponent;
  let fixture: ComponentFixture<DetailsTratadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTratadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
