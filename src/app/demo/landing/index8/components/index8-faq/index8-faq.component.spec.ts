import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8FAQComponent } from './index8-faq.component';

describe('Index8FAQComponent', () => {
  let component: Index8FAQComponent;
  let fixture: ComponentFixture<Index8FAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8FAQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
