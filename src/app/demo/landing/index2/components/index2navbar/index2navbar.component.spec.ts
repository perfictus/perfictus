import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2navbarComponent } from './index2navbar.component';

describe('Index2navbarComponent', () => {
  let component: Index2navbarComponent;
  let fixture: ComponentFixture<Index2navbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2navbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2navbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
