

import {Injectable} from '@angular/core';
import {Adds} from './adds';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../error.service';


@Injectable()
export class AddsService {

  entityUrl = environment.REST_API_URL + 'adds';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('AddsService');
  }

  getAdds(): Observable<Adds[]> {
    return this.http.get<Adds[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getAdds', []))
      );
  }

  getAddsById(addsId: string): Observable<Adds> {
    return this.http.get<Adds>(this.entityUrl + '/' + addsId)
      .pipe(
          catchError(this.handlerError('getAddsById', {} as Adds))
      );
  }

  addAdds(adds: Adds): Observable<Adds> {
    return this.http.post<Adds>(this.entityUrl, adds)
      .pipe(
        catchError(this.handlerError('addAdds', adds))
      );
  }

  updateAdds(addsId: string, adds: Adds): Observable<{}> {
    return this.http.put<Adds>(this.entityUrl + '/' + addsId, adds)
      .pipe(
        catchError(this.handlerError('updateAdds', adds))
      );
  }

  deleteAdds(addsId: string): Observable<{}> {
    return this.http.delete<Adds>(this.entityUrl + '/' + addsId)
      .pipe(
         catchError(this.handlerError('deleteAdds', [addsId]))
      );
  }


}
