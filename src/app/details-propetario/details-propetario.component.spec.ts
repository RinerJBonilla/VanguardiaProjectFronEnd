import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPropetarioComponent } from './details-propetario.component';

describe('DetailsPropetarioComponent', () => {
  let component: DetailsPropetarioComponent;
  let fixture: ComponentFixture<DetailsPropetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPropetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPropetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
