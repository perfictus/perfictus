import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2aboutComponent } from './index2about.component';

describe('Index2aboutComponent', () => {
  let component: Index2aboutComponent;
  let fixture: ComponentFixture<Index2aboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2aboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
