import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5contactComponent } from './index5contact.component';

describe('Index5contactComponent', () => {
  let component: Index5contactComponent;
  let fixture: ComponentFixture<Index5contactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5contactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5contactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
