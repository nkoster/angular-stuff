import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Niels';
  post = {
    title: 'Post 1',
    isFavorite: true
  }
  onFavoriteChanged(isFavorite) {
    console.log('Favorite changed: ' + isFavorite)
  }
}
