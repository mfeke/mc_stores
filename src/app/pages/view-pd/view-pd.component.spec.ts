import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdComponent } from './view-pd.component';

describe('ViewPdComponent', () => {
  let component: ViewPdComponent;
  let fixture: ComponentFixture<ViewPdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
