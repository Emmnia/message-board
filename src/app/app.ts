import { Component, inject } from '@angular/core';
import { PostCreate } from './posts/post-create/post-create';
import { Header } from './header/header';
import { PostList } from './posts/post-list/post-list';
import { Post } from './posts/interfaces';
import { PostService } from './posts/post.service';


@Component({
  selector: 'app-root',
  imports: [PostCreate, Header, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  postService = inject(PostService);

  onPostAdded(post: Post) {
    this.postService.addPost(post);
  }
}
