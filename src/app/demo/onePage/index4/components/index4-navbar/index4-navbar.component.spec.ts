import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4NavbarComponent } from './index4-navbar.component';

describe('Index4NavbarComponent', () => {
  let component: Index4NavbarComponent;
  let fixture: ComponentFixture<Index4NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
