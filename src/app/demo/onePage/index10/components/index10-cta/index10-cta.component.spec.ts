import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10CtaComponent } from './index10-cta.component';

describe('Index10CtaComponent', () => {
  let component: Index10CtaComponent;
  let fixture: ComponentFixture<Index10CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
