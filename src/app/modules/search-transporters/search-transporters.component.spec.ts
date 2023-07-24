import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransportersComponent } from './search-transporters.component';

describe('SearchTransportersComponent', () => {
  let component: SearchTransportersComponent;
  let fixture: ComponentFixture<SearchTransportersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTransportersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
