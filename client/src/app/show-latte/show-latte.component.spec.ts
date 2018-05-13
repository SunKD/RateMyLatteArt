import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLatteComponent } from './show-latte.component';

describe('ShowLatteComponent', () => {
  let component: ShowLatteComponent;
  let fixture: ComponentFixture<ShowLatteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLatteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
