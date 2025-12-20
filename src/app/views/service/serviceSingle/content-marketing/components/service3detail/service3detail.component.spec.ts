import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3detailComponent } from './service3detail.component';

describe('Service3detailComponent', () => {
  let component: Service3detailComponent;
  let fixture: ComponentFixture<Service3detailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3detailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
