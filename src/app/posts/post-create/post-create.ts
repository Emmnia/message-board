import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput } from '@angular/material/input';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule, MatCardModule, MatInput, MatButton, MatFormField],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  postForm = new FormGroup({
    enteredTitle: new FormControl(''),
    enteredContent: new FormControl('')
  });
  post = output<Post>();

  onAddPost() {
    const formValue = this.postForm.value;

    if (formValue.enteredTitle && formValue.enteredContent) {
      this.post.emit({
        title: formValue.enteredTitle,
        content: formValue.enteredContent
      });
      this.postForm.reset();
    }
  }
}
