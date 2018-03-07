import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Error } from '../common/error';
import { NotFoundError } from '../common/error-not-found';
import { BadRequestError } from '../common/error-bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts)
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.service.create(post)
    .subscribe(
      newPost => {
      // square brackets since post is not of type :any
      // which is an alternative way
      post['id'] = newPost.id;
      this.posts.splice(0, 0, post);
      //console.log(response.json())
      },
      (error: Error) => {
        if (error instanceof BadRequestError) {
          //this.form.setErrors(error.json())
        } else throw error
      }
    )
  }

  updatePost(post) {
    // update only a part of an object
    this.service.update(post.id)
    .subscribe(
      updatedPost => {
        console.log(`Updated post is: ${updatedPost}`)
      }
    )
    // whole object
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {
    this.service.delete(post.id)
    .subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
      },
      (error: Error) => {
        if (error instanceof NotFoundError)
          alert('Already deleted')
        else throw error
      }
    )
  }

}
