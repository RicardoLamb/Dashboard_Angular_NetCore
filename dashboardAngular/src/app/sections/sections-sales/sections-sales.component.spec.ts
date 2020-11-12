import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsSalesComponent } from './sections-sales.component';

describe('SectionsSalesComponent', () => {
  let component: SectionsSalesComponent;
  let fixture: ComponentFixture<SectionsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
