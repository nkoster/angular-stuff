import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Error } from '../common/error';
import { NotFoundError } from '../common/error-not-found';
import { BadRequestError } from '../common/error-bad-input';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError)
  }

  create(resource) {
    //error.status === 400
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response.json())
    .catch(this.handleError)
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({
      isRead: true
    }))
    .map(response => response.json())
    .catch(this.handleError)
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.handleError)
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));
    if (error.status === 404)
      return Observable.throw(new NotFoundError);
    return Observable.throw(new Error(error.json()))
  }
  
}