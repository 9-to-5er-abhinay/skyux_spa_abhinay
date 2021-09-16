import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { of } from 'rxjs';
import { Item } from '../../Item';
import { ItemService } from '../../services/item.service';
import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
   let component: ItemsComponent;
   let fixture: ComponentFixture<ItemsComponent>;
   let itemService: any;
   let stubItemsArray: Item[] = [
    {
      'firstName': 'First',
      'lastName': 'Name',
      'contact': 7696878787,
      'email': 'first@first.com',
      'date': '15/08/2021',
      'address': 'first123',
      'id': 1
    },
    {
      'firstName': 'Second',
      'lastName': 'Name',
      'contact': 8054372723,
      'email': 'second@second.com',
      'date': '21/09/2021',
      'address': 'second123',
      'id': 2
    }
  ];
  let stubSingleItemObject: Item = {
      'firstName': 'First',
      'lastName': 'Name',
      'contact': 7696878787,
      'email': 'first@first.com',
      'date': '15/08/2021',
      'address': 'first123',
      'id': 1
    };

  beforeEach(async( () => {
    const itemServiceSpy = jasmine.createSpyObj('ItemService', ['getItems', 'addItem']);
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers: [
        { provide: ItemService, useValue: itemServiceSpy }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ItemsComponent);
        component = fixture.componentInstance;
        itemService = TestBed.inject(ItemService);
      });
  }));
  beforeEach( () => {
    itemService.getItems.and.returnValue(of([]));
  });

  it('should create the items component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should render add-task by selector', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('app-add-task'));
    expect(element).toBeTruthy();
  });
  it('should render single-item by selector', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('app-single-item'));
    expect(element).toBeTruthy();
  });

  it('should call the correct function on onAddItem event', () => {
    fixture.detectChanges();
    const spy = spyOn(component, 'addItem');
    const element = fixture.debugElement.query(By.css('app-add-task'));
    element.nativeElement.dispatchEvent(new Event('onAddItem'));
    expect(spy).toHaveBeenCalledWith(jasmine.any(Event));
  });

  it('should pass down the correct items to its child component', () => {
    component.items = stubItemsArray;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('app-single-item')).componentInstance;
    expect(element.gridData).toEqual(component.items);
  });

  it('should get Items via service', () => {
    itemService.getItems.and.returnValue(of(stubItemsArray));
    fixture.detectChanges();
    // component.ngOnInit();
    expect(component.items).toEqual(stubItemsArray);
    expect(component.items.length).toBe(2);
  });

  it('should add Item via service', () => {
    fixture.detectChanges();
    itemService.addItem.and.returnValue(of(stubSingleItemObject));
    component.addItem(stubSingleItemObject);
    expect(component.items[0]).toEqual(stubSingleItemObject);
    expect(component.items.length).toBe(1);
  });
});
