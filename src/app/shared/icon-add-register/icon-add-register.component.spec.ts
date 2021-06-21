import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddRegisterComponent } from './icon-add-register.component';

describe('IconAddRegisterComponent', () => {
  let component: IconAddRegisterComponent;
  let fixture: ComponentFixture<IconAddRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAddRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAddRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
