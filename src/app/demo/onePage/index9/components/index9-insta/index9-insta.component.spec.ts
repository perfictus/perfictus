import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9InstaComponent } from './index9-insta.component';

describe('Index9InstaComponent', () => {
  let component: Index9InstaComponent;
  let fixture: ComponentFixture<Index9InstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index9InstaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index9InstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
