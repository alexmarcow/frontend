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
  @Output() postCreated = new EventEmitter<Post>();

  // postInput: HTMLTextAreaElement
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title, // `.title` is the `name=title` declared in the `post-create.component.html`.
      content: form.value.content // `.title` is the `name=title` declared in the `post-create.component.html`.
    };

    this.postCreated.emit(post);
  }
}
