import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  // Create @Output() to make the EventEmitter accessible for the outside of this component.
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {}

  /**
   * Add posts with the including title and content. Checks if it is valid and add it to the service.
   * @param form Receive form including title and content.
   */
  onAddPost(form: NgForm) {
    // Check first if the form is valid.
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);

    /**
     * After `Save Post` the Title and the Content fields are reset.
     */
    form.resetForm();
  }
}
