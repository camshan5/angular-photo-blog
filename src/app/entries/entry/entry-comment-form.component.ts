import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-entry-comment-form",
  templateUrl: "entry-comment-form.component.html"
})
export class EntryCommentFormComponent {
  // add a name and comment property
  name: string = "";
  comment: string = "";

  // add prop to set up EventEmitter (as a <generic>)
  @Output() onCommentAdded = new EventEmitter<{
    name: string;
    comment: string;
  }>();

  // ViewChild binds local variables found in the form
  @ViewChild("commentForm") commentForm: NgForm;
  // add onsubmit method
  onSubmit(commentForm: NgForm) {
    // use debugger statement to test submitEvent binding
    // debugger;
    let comment = { name: this.name, comment: this.comment }; // create the comment
    this.onCommentAdded.emit(comment); // emit the comment
    this.commentForm.resetForm(); // clear the form after submitting
  }
}
