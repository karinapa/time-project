import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should isIncludeTime (0, 23, 1)', () => {
    let isTimeInclude = component.isIncludeTime(0, 23, 1);
    expect(isTimeInclude).toEqual(true);
  });

  it('should isIncludeTime (0, 10, 6)', () => {
    let isTimeInclude = component.isIncludeTime(0, 10, 6);
    expect(isTimeInclude).toEqual(true);
  });

  it('should isIncludeTime (23, 10, 6)', () => {
    let isTimeInclude = component.isIncludeTime(23, 10, 6);
    expect(isTimeInclude).toEqual(true);
  });

  it('should isIncludeTime (4, 1, 9)', () => {
    let isTimeInclude = component.isIncludeTime(4, 1, 9);
    expect(isTimeInclude).toEqual(true);
  });

  it('should isIncludeTime (0, 12, 6)', () => {
    let isTimeInclude = component.isIncludeTime(0, 12, 6);
    expect(isTimeInclude).toEqual(true);
  });

  it('should isIncludeTime (1, 1, 9)', () => {
    let isTimeInclude = component.isIncludeTime(1, 1, 9);
    expect(isTimeInclude).toEqual(true);
  });
  
  it('should isIncludeTime (0, 1, 23)', () => {
    let isTimeInclude = component.isIncludeTime(0, 1, 23);
    expect(isTimeInclude).toEqual(false);
  });

  it('should isIncludeTime (23, 1, 23)', () => {
    let isTimeInclude = component.isIncludeTime(23, 1, 23);
    expect(isTimeInclude).toEqual(false);
  });

  it('should isIncludeTime (1, 20, 23)', () => {
    let isTimeInclude = component.isIncludeTime(1, 20, 23);
    expect(isTimeInclude).toEqual(false);
  });
});

