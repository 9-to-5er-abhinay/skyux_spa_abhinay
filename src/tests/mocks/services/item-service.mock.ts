import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export class ItemServiceMock {

  public getItems(): Observable<[]> {
    return of([]);
  }
}
