import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationArmeeComponent } from './creation-armee.component';

describe('CreationArmeeComponent', () => {
  let component: CreationArmeeComponent;
  let fixture: ComponentFixture<CreationArmeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationArmeeComponent]
    });
    fixture = TestBed.createComponent(CreationArmeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
