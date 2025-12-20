import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPerClickComponent } from './pay-per-click.component';

describe('PayPerClickComponent', () => {
  let component: PayPerClickComponent;
  let fixture: ComponentFixture<PayPerClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPerClickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPerClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
