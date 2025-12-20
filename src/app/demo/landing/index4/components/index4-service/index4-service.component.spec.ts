import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index4ServiceComponent } from './index4-service.component';

describe('Index4ServiceComponent', () => {
  let component: Index4ServiceComponent;
  let fixture: ComponentFixture<Index4ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index4ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index4ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
