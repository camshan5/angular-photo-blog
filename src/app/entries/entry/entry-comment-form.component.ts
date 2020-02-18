import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-entry-comment-form",
  templateUrl: "entry-comment-form.component.html"
})
export class EntryCommentFormComponent {
  // add a name and comment property
  name: string = "";
  comment: string = "";

  // add prop to set up EventEmitter (as a <generic>)
  @Output() onCommentAdded = new EventEmitter<{ name: string; comment: string }>();

  // add onsubmit method
  onSubmit() {
    // use debugger statement to test submitEvent binding
    // debugger;
    let comment = { name: this.name, comment: this.comment }; // create the comment
    this.onCommentAdded.emit(comment); // emit the comment
  }
}
