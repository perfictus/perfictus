import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4BrandComponent } from './index4-brand.component';

describe('Index4BrandComponent', () => {
  let component: Index4BrandComponent;
  let fixture: ComponentFixture<Index4BrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4BrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
