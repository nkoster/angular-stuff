import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Error } from '../common/error';
import { NotFoundError } from '../common/error-not-found';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BadRequestError } from '../common/error-bad-input';

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url)
  }

  createPost(post) {
    //error.status === 400
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response) => {
      if (error.status === 400)
        return Observable.throw(new BadRequestError(error.json()));
      return Observable.throw(new Error(error.json()))
    })
  }

  updatePost(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({
      isRead: true
    }))
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .catch((error: Response) => {
      if (error.status === 404)
        return Observable.throw(new NotFoundError);
      return Observable.throw(new Error(error.json()))
    })
  }
  
}
