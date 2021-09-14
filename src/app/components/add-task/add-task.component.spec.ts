import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { Item } from '../../Item';
import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
   let component: AddTaskComponent;
   let fixture: ComponentFixture<AddTaskComponent>;
   let debugElement: DebugElement;
   let htmlElement: HTMLElement;

   const stubItem: Item = {
    firstName: 'First',
    lastName: 'Last',
    contact: 7696969696,
    email: 'first@firstmail.com',
    date: '12/09/2021',
    address: 'Random street'
  };

   beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddTaskComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        htmlElement = fixture.nativeElement;
      });
  }));

  it('should create the add-task component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the form', () => {
    fixture.detectChanges();
    const form = htmlElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should display p tag', () => {
    fixture.detectChanges();
    const p = htmlElement.querySelector('p');
    expect(p.textContent).toEqual('The fields with (*) mark are mandatory');
  });

  it('should display submit button', () => {
    fixture.detectChanges();
    const button = debugElement.query(By.css('.btn'));
    expect(button.nativeElement.textContent.trim()).toEqual('Save Entry');
  });

  // it('should display p tag', () => {
  //   fixture.detectChanges();
  //   const pu = htmlElement.querySelector('.mint');
  //   expect(pu.textContent.trim()).toEqual('First Name');
  // });

  it('should emit on onSubmit()', () => {
    component.firstName = 'First';
    component.lastName = 'Last';
    component.address = 'Random street';
    component.contact = 7696969696;
    component.date = 'Date Sun Sep 12 2021 00:00:00 GMT+0530 (India Standard Time)';
    component.email = 'first@firstmail.com';
    let item: Item;
    component.onAddItem.subscribe((i: Item) => item = i);
    component.onSubmit();
    expect(item).toEqual(stubItem);
  });

  it('should call onSubmit() on ngSubmit event', () => {
    const spy = spyOn(component, 'onSubmit');
    const element = debugElement.query(By.css('.add-form'));
    element.nativeElement.dispatchEvent(new Event('ngSubmit'));
    expect(spy).toHaveBeenCalled();
  });
});
