import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6BrandComponent } from './index6-brand.component';

describe('Index6BrandComponent', () => {
  let component: Index6BrandComponent;
  let fixture: ComponentFixture<Index6BrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6BrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
