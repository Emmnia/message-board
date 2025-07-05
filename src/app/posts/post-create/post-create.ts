import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput } from '@angular/material/input';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatCardModule, MatInput, MatButton, MatFormField],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  enteredTitle = '';
  enteredContent = '';
  post = output<Post>();

  onAddPost() {
    if (this.enteredTitle && this.enteredContent) {
      this.post.emit({
        title: this.enteredTitle,
        content: this.enteredContent
      });

      this.enteredTitle = '';
      this.enteredContent = '';
    }
  }
}
