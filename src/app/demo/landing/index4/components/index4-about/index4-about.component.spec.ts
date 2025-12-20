import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4AboutComponent } from './index4-about.component';

describe('Index4AboutComponent', () => {
  let component: Index4AboutComponent;
  let fixture: ComponentFixture<Index4AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
