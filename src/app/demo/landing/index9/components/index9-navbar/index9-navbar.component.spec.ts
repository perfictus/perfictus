import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9NavbarComponent } from './index9-navbar.component';

describe('Index9NavbarComponent', () => {
  let component: Index9NavbarComponent;
  let fixture: ComponentFixture<Index9NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
