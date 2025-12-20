import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoBlogComponent } from './seo-blog.component';

describe('SeoBlogComponent', () => {
  let component: SeoBlogComponent;
  let fixture: ComponentFixture<SeoBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
