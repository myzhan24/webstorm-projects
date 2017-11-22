import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidzCornerComponent } from './kidz-corner.component';

describe('KidzCornerComponent', () => {
  let component: KidzCornerComponent;
  let fixture: ComponentFixture<KidzCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidzCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidzCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
