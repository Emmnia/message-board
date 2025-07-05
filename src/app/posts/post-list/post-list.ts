import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  posts: Post[] = [];
}
