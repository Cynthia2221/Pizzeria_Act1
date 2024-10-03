import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPizzeriaPage } from './my-pizzeria.page';

describe('MyPizzeriaPage', () => {
  let component: MyPizzeriaPage;
  let fixture: ComponentFixture<MyPizzeriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPizzeriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
