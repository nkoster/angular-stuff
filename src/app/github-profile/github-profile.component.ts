import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('snapshot ' + this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      console.log('observable ' + +params.get('id'))
    })
  }

}
