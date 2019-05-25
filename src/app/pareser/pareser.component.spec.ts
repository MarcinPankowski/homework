import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PareserComponent } from './pareser.component';

describe('PareserComponent', () => {
  let component: PareserComponent;
  let fixture: ComponentFixture<PareserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PareserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PareserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
