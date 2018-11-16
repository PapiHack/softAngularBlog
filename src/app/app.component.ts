import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'Liste des posts du blog.';

  posts: Array<Post> = [
    new Post(1, 'Mon Premier Post', 'Ceci est mon premier post.', 0, 0, new Date()),
    new Post(2, 'Mon Second Post', 'Ceci est mon second post.', 0, 0, new Date()),
    new Post(3, 'Mon autre Post', 'Ceci est mon autre post.', 0, 0, new Date())
  ];

  constructor(){
  }

  ngOnInit(){
  }

}
