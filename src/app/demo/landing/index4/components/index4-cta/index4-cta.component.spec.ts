import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4CtaComponent } from './index4-cta.component';

describe('Index4CtaComponent', () => {
  let component: Index4CtaComponent;
  let fixture: ComponentFixture<Index4CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
