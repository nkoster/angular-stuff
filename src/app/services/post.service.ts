import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Error } from '../common/error';
import { NotFoundError } from '../common/error-not-found';
import { BadRequestError } from '../common/error-bad-input';

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
    .catch(this.handleError)
  }

  createPost(post) {
    //error.status === 400
    return this.http.post(this.url, JSON.stringify(post))
    .catch(this.handleError)
  }

  updatePost(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({
      isRead: true
    }))
    .catch(this.handleError)
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
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
