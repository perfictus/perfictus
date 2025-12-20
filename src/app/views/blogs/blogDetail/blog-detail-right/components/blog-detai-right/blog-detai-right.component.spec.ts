import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetaiRightComponent } from './blog-detai-right.component';

describe('BlogDetaiRightComponent', () => {
  let component: BlogDetaiRightComponent;
  let fixture: ComponentFixture<BlogDetaiRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetaiRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetaiRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
