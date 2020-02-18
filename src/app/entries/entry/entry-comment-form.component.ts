import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  Input
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { EntryService } from "..";

@Component({
  selector: "app-entry-comment-form",
  templateUrl: "entry-comment-form.component.html"
})
export class EntryCommentFormComponent {
  // add a name and comment property
  name: string = "";
  comment: string = "";

  @Input() entryId: number;
  // add prop to set up EventEmitter (as a <generic>)
  @Output() onCommentAdded = new EventEmitter<{
    name: string;
    comment: string;
  }>();

  // ViewChild binds local variables found in the form,
  // lets the component inspect the template for local variables
  // and assign them to members of a component.
  @ViewChild("commentForm") commentForm: NgForm;

  // specify private to tell TypeScript to append the to the prototype
  // making it available on the instance of the class
  constructor(private entryService: EntryService) {}

  onSubmit(commentForm: NgForm) {

    // create the comment
    let comment = { name: this.name, comment: this.comment };

    this.entryService.addComment(this.entryId, comment).then(() => {
      // emit the comment
      this.onCommentAdded.emit(comment);
      // clear the form after submitting
      this.commentForm.resetForm();
    });
  }

}
