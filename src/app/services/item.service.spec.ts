import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { Item } from '../Item';
import { ItemService } from './item.service';

describe('ItemService', () => {
    let service: ItemService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule, SkyAppTestModule],
            providers: [ItemService]
        });
        service = TestBed.inject(ItemService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });

    it('should be able to retrieve via GET', () => {
        const dummyItems: Item[] = [
            {
                firstName: 'First',
                lastName: 'Name',
                contact: 7696878787,
                email: 'first@first.com',
                date: '15/08/2021',
                address: 'first123',
                id: 1
            },
            {
                firstName: 'Second',
                lastName: 'Name',
                contact: 8054372723,
                email: 'second@second.com',
                date: '21/09/2021',
                address: 'second123',
                id: 2
            }
        ];
        service.getItems().subscribe(items => {
            expect(items).toBeTruthy('No items found');
            expect(items.length).toBe(2);
            expect(items).toEqual(dummyItems);
        });
        const req = httpMock.expectOne( `http://localhost:5100/items`);
        expect(req.request.method).toBe('GET');
        expect(req.request.responseType).toEqual('json');
        req.flush(dummyItems);
    });

    it('should be able to post via POST', () => {
        const dummyItem: Item = {
              firstName: 'First',
              lastName: 'Name',
              contact: 7696878787,
              email: 'first@first.com',
              date: '15/08/2021',
              address: 'first123',
              id: 1
        };
        service.addItem(dummyItem).subscribe();
        const req = httpMock.expectOne( `http://localhost:5100/items`);
        expect(req.request.method).toBe('POST');
        req.flush(dummyItem);
    });
});
