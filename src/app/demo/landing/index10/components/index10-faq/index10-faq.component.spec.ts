import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10FaqComponent } from './index10-faq.component';

describe('Index10FaqComponent', () => {
  let component: Index10FaqComponent;
  let fixture: ComponentFixture<Index10FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10FaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
