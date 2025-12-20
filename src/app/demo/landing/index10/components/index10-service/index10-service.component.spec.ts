import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index10ServiceComponent } from './index10-service.component';

describe('Index10ServiceComponent', () => {
  let component: Index10ServiceComponent;
  let fixture: ComponentFixture<Index10ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index10ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index10ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
