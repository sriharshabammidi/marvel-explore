import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASeriesComponent } from './a-series.component';

describe('ASeriesComponent', () => {
  let component: ASeriesComponent;
  let fixture: ComponentFixture<ASeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
