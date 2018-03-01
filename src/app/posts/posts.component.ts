import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json()
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        // square brackets since post is not of type :any
        // which is an alternative way
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        //console.log(response.json())
      })
  }

  updatePost(post) {
    // update only a part of an object
    this.http.patch(this.url + '/' + post.id, JSON.stringify({
      isRead: true
    })).subscribe(response => {
      console.log(`response=${response.json()}`)
    })
    // whole object
    //this.http.put(this.url, JSON.stringify(post))
  }

  ngOnInit() {
  }

}
