import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHEroComponent } from './index-hero.component';

describe('IndexHEroComponent', () => {
  let component: IndexHEroComponent;
  let fixture: ComponentFixture<IndexHEroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexHEroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexHEroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
