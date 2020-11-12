import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsHealthComponent } from './sections-health.component';

describe('SectionsHealthComponent', () => {
  let component: SectionsHealthComponent;
  let fixture: ComponentFixture<SectionsHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
