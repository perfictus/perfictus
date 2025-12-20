import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdetailLeftComponent } from './blogdetail-left.component';

describe('BlogdetailLeftComponent', () => {
  let component: BlogdetailLeftComponent;
  let fixture: ComponentFixture<BlogdetailLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogdetailLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogdetailLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
