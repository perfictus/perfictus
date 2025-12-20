import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3navbarComponent } from './index3navbar.component';

describe('Index3navbarComponent', () => {
  let component: Index3navbarComponent;
  let fixture: ComponentFixture<Index3navbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3navbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3navbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
