import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7ContactComponent } from './index7-contact.component';

describe('Index7ContactComponent', () => {
  let component: Index7ContactComponent;
  let fixture: ComponentFixture<Index7ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
