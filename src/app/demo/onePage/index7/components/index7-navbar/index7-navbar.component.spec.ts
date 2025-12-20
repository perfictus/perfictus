import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7NavbarComponent } from './index7-navbar.component';

describe('Index7NavbarComponent', () => {
  let component: Index7NavbarComponent;
  let fixture: ComponentFixture<Index7NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
