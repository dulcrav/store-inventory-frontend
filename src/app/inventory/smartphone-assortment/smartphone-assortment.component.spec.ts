import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneAssortmentComponent } from './smartphone-assortment.component';

describe('SmartphoneAssortmentComponent', () => {
  let component: SmartphoneAssortmentComponent;
  let fixture: ComponentFixture<SmartphoneAssortmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneAssortmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneAssortmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
