import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatCardModule, MatInput, MatButton, MatFormField],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {
  enteredValue = '';
  newPost = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
