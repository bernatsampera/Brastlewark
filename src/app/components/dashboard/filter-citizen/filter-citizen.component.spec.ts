import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCitizenComponent } from './filter-citizen.component';

describe('FilterCitizenComponent', () => {
  let component: FilterCitizenComponent;
  let fixture: ComponentFixture<FilterCitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCitizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
