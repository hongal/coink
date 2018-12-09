import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPurchaseComponent } from './coin-purchase.component';

describe('CoinPurchaseComponent', () => {
  let component: CoinPurchaseComponent;
  let fixture: ComponentFixture<CoinPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
