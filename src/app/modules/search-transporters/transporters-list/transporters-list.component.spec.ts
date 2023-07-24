import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportersListComponent } from './transporters-list.component';

describe('TransportersListComponent', () => {
  let component: TransportersListComponent;
  let fixture: ComponentFixture<TransportersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
