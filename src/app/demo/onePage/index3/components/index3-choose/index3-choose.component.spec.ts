import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3ChooseComponent } from './index3-choose.component';

describe('Index3ChooseComponent', () => {
  let component: Index3ChooseComponent;
  let fixture: ComponentFixture<Index3ChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3ChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
