import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  ngOnInit() {
    //let page = this.route.snapshot.queryParamMap.get('page');
    console.log('snapshot ' + this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      console.log('observable ' + +params.get('id'))
    })
  }

}
