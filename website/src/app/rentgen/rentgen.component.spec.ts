import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentgenComponent } from './rentgen.component';

describe('RentgenComponent', () => {
  let component: RentgenComponent;
  let fixture: ComponentFixture<RentgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
