import { Component } from '@angular/core';
import { onFavoriteChangedEventArgs } from './favorite/favorite.component';

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
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
  courses = [1, 2];
  onFavoriteChanged(eventArgs: onFavoriteChangedEventArgs) {
    console.log('Favorite changed: ' + eventArgs.newValue)
  }
}
