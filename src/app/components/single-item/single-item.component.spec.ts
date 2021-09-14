import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
import { SkyModalService } from '@skyux/modals';
import { SkyDataEntryGridEditModalContext } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal-context';
import { SkyDataEntryGridEditModalComponent } from '../data-entry-grid-edit-modal/data-entry-grid-edit-modal.component';
import { SingleItemComponent } from './single-item.component';

describe('ItemsComponent', () => {

  let component: SingleItemComponent;
  let fixture: ComponentFixture<SingleItemComponent>;
  // let el: DebugElement;
  // let modalService: any;

  beforeEach(async( () => {
    const modalServiceSpy = jasmine.createSpyObj('SkyModalService', ['getItems', 'addItem']);
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule],
      providers: [
        {provide: SkyModalService, useValue: modalServiceSpy},
        SkyDataEntryGridEditModalContext,
        SkyDataEntryGridEditModalComponent
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SingleItemComponent);
        component = fixture.componentInstance;
        // el = fixture.debugElement;
        // modalService = TestBed.inject(SkyModalService);
      });
  }));

  it('should create the items component', () => {
    expect(component).toBeTruthy();
    // expect(component.gridApi.sizeColumnsToFit()).toHaveBeenCalled();
  });

  // it('should test openModal()', () => {
  //   component.gridData = [
  //     {
  //       'firstName': 'First',
  //       'lastName': 'Name',
  //       'contact': 7696878787,
  //       'email': 'first@first.com',
  //       'date': '15/08/2021',
  //       'address': 'first123',
  //       'id': 1
  //     },
  //     {
  //       'firstName': 'Second',
  //       'lastName': 'Name',
  //       'contact': 8054372723,
  //       'email': 'second@second.com',
  //       'date': '21/09/2021',
  //       'address': 'second123',
  //       'id': 2
  //     }
  //   ];
  //   fixture.detectChanges();
  //   let dum: SkyModalCloseArgs = new SkyModalCloseArgs();
  //   dum.reason = 'cancel';
  //   modalService.open().closed.and.callThrough();
  //   console.log("dum", dum);

  //   component.openModal();

  //   modalService.c

  //   expect(dummy.reason).toEqual('cancel');
  //   // expect(component.gridApi.sizeColumnsToFit()).toHaveBeenCalled();
  // });
});
