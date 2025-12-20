import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2chooseComponent } from './index2choose.component';

describe('Index2chooseComponent', () => {
  let component: Index2chooseComponent;
  let fixture: ComponentFixture<Index2chooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2chooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2chooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
