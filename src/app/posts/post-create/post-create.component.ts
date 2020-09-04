import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // Create @Output() to make the EventEmitter accessible for the outside of this component.
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    // Check first if the form is valid.
    if (form.invalid) {
      return;
    }

    // If a form exists, the post will be saved in `postCreated`.
    const post: Post = {
      title: form.value.title, // `.title` is the `name=title` declared in the `post-create.component.html`.
      content: form.value.content // `.title` is the `name=title` declared in the `post-create.component.html`.
    };

    this.postCreated.emit(post);
  }
}
