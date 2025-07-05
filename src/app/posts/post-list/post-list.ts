import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  posts = input<Post[]>([]);
}
