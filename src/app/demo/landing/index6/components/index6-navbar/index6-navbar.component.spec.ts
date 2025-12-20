import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6NavbarComponent } from './index6-navbar.component';

describe('Index6NavbarComponent', () => {
  let component: Index6NavbarComponent;
  let fixture: ComponentFixture<Index6NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
