import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBashComponent } from './view-bash.component';

describe('ViewBashComponent', () => {
  let component: ViewBashComponent;
  let fixture: ComponentFixture<ViewBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
