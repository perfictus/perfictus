import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7ServiceComponent } from './index7-service.component';

describe('Index7ServiceComponent', () => {
  let component: Index7ServiceComponent;
  let fixture: ComponentFixture<Index7ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index7ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index7ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
