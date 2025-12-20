import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index8ServiceComponent } from './index8-service.component';

describe('Index8ServiceComponent', () => {
  let component: Index8ServiceComponent;
  let fixture: ComponentFixture<Index8ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index8ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index8ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
