import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10ProjectComponent } from './index10-project.component';

describe('Index10ProjectComponent', () => {
  let component: Index10ProjectComponent;
  let fixture: ComponentFixture<Index10ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10ProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
