import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRktComponent } from './price-rkt.component';

describe('PriceRktComponent', () => {
  let component: PriceRktComponent;
  let fixture: ComponentFixture<PriceRktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceRktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
