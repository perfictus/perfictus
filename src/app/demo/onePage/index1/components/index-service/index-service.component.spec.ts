import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexServiceComponent } from './index-service.component';

describe('IndexServiceComponent', () => {
  let component: IndexServiceComponent;
  let fixture: ComponentFixture<IndexServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
