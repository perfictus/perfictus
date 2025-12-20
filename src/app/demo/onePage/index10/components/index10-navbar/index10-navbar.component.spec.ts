import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10NavbarComponent } from './index10-navbar.component';

describe('Index10NavbarComponent', () => {
  let component: Index10NavbarComponent;
  let fixture: ComponentFixture<Index10NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
