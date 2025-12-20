import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4WorkProcessComponent } from './index4-work-process.component';

describe('Index4WorkProcessComponent', () => {
  let component: Index4WorkProcessComponent;
  let fixture: ComponentFixture<Index4WorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4WorkProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4WorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
