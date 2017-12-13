import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodFillComponent } from './flood-fill.component';

describe('FloodFillComponent', () => {
  let component: FloodFillComponent;
  let fixture: ComponentFixture<FloodFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
