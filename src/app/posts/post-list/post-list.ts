import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  postService = inject(PostService);
  posts = this.postService.posts;
}
