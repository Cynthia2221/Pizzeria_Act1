import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePizzasPage } from './update-pizzas.page';

describe('UpdatePizzasPage', () => {
  let component: UpdatePizzasPage;
  let fixture: ComponentFixture<UpdatePizzasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePizzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
