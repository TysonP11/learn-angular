import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSuccessComponent } from './warning-success.component';

describe('WarningSuccessComponent', () => {
  let component: WarningSuccessComponent;
  let fixture: ComponentFixture<WarningSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
