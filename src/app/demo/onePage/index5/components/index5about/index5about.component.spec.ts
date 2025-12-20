import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index5aboutComponent } from './index5about.component';

describe('Index5aboutComponent', () => {
  let component: Index5aboutComponent;
  let fixture: ComponentFixture<Index5aboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index5aboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index5aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
