import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPdComponent } from './details-pd.component';

describe('DetailsPdComponent', () => {
  let component: DetailsPdComponent;
  let fixture: ComponentFixture<DetailsPdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
