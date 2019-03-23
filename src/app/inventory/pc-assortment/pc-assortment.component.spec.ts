import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAssortmentComponent } from './pc-assortment.component';

describe('PcAssortmentComponent', () => {
  let component: PcAssortmentComponent;
  let fixture: ComponentFixture<PcAssortmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcAssortmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAssortmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
