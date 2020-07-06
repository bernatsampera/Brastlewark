import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCitizenComponent } from './sort-citizen.component';

describe('SortCitizenComponent', () => {
  let component: SortCitizenComponent;
  let fixture: ComponentFixture<SortCitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortCitizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
