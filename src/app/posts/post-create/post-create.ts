import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormField, MatInput } from '@angular/material/input';
import { Post } from '../interfaces';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule, MatCardModule, MatInput, MatButton, MatFormField, MatError],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  postForm = new FormGroup({
    enteredTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
    enteredContent: new FormControl('', [Validators.required])
  });
  post = output<Post>();

  get titleErrors() {
    const control = this.postForm.get('enteredTitle');
    if (control?.hasError('required')) return 'Title is required';
    if (control?.hasError('minlength')) return 'Title must be at least 3 characters';
    return null;
  }

  get contentErrors() {
    const control = this.postForm.get('enteredContent');
    if (control?.hasError('required')) return 'Content is required';
    return null;
  }

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
