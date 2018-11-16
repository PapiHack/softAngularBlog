import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'ab-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  loveIt(post: Post){
    post.increaseLoveIts();
  }

  dontLoveIt(post: Post){
    post.increaseDontLoveIts();
  }

}
