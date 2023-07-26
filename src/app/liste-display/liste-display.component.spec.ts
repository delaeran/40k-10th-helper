import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDisplayComponent } from './liste-display.component';

describe('ListeDisplayComponent', () => {
  let component: ListeDisplayComponent;
  let fixture: ComponentFixture<ListeDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDisplayComponent]
    });
    fixture = TestBed.createComponent(ListeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
