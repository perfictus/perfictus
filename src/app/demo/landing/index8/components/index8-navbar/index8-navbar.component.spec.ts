import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8NavbarComponent } from './index8-navbar.component';

describe('Index8NavbarComponent', () => {
  let component: Index8NavbarComponent;
  let fixture: ComponentFixture<Index8NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
