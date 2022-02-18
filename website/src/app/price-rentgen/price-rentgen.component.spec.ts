import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRentgenComponent } from './price-rentgen.component';

describe('PriceRentgenComponent', () => {
  let component: PriceRentgenComponent;
  let fixture: ComponentFixture<PriceRentgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceRentgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRentgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
