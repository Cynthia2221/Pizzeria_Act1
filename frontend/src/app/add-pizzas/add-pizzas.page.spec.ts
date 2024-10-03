import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPizzasPage } from './add-pizzas.page';

describe('AddPizzasPage', () => {
  let component: AddPizzasPage;
  let fixture: ComponentFixture<AddPizzasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPizzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
