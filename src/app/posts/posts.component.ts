import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json()
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('Post already deleted')
        } else {
          alert('Unexpected error')
        }
      }
    )
  }
  
  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.createPost(post)
    .subscribe(
      response => {
      // square brackets since post is not of type :any
      // which is an alternative way
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      //console.log(response.json())
      },
      (error: Response) => {
        if (error.status === 400) {
          //this.form.setErrors(error.json())
        } else {
          alert('Unexpected error');
          console.error(error)
        }

      }
    )
  }

  updatePost(post) {
    // update only a part of an object
    this.service.updatePost(post.id)
    .subscribe(
      response => {
        console.log(`response=${response.json()}`)
      },
      error => {
        console.error(error)
      }
    )
    // whole object
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      },
      (error: Response) => {
        if (error.status === 404)
          alert('Already deleted')
        else {
          alert('Unexpected error');
          console.error(`Error: ${error.status}`)
        }
      }
    )
  }

}
