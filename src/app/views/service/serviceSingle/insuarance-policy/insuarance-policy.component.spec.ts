import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuarancePolicyComponent } from './insuarance-policy.component';

describe('InsuarancePolicyComponent', () => {
  let component: InsuarancePolicyComponent;
  let fixture: ComponentFixture<InsuarancePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuarancePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuarancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
