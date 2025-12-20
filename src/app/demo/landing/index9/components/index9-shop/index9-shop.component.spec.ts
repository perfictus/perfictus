import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9ShopComponent } from './index9-shop.component';

describe('Index9ShopComponent', () => {
  let component: Index9ShopComponent;
  let fixture: ComponentFixture<Index9ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9ShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
