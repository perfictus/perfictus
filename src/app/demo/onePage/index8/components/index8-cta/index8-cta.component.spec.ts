import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8CtaComponent } from './index8-cta.component';

describe('Index8CtaComponent', () => {
  let component: Index8CtaComponent;
  let fixture: ComponentFixture<Index8CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
