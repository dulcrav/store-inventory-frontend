import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAssortmentComponent } from './laptop-assortment.component';

describe('LaptopAssortmentComponent', () => {
  let component: LaptopAssortmentComponent;
  let fixture: ComponentFixture<LaptopAssortmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopAssortmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopAssortmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
