import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMrtComponent } from './price-mrt.component';

describe('PriceMrtComponent', () => {
  let component: PriceMrtComponent;
  let fixture: ComponentFixture<PriceMrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceMrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
