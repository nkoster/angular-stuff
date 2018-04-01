import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/followers'], {
        queryParams: {
          page: 1,
          order: 'newest'
        }
      }
    )
  }

  ngOnInit() {
  }

}
