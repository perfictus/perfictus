import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index6ServiceComponent } from './index6-service.component';

describe('Index6ServiceComponent', () => {
  let component: Index6ServiceComponent;
  let fixture: ComponentFixture<Index6ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index6ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index6ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
