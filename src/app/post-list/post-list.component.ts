import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'ab-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {

  @Input() posts: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
