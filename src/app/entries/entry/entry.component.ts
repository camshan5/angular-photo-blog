import { Component, Input } from "@angular/core";
import { Entry } from "../shared/entry.model";

@Component({
  selector: "app-entry",
  templateUrl: "entry.component.html",
  styleUrls: ["entry.component.css"]
})
export class EntryComponent {
  // entry prop is how the data is shared between the two components
  // assign Entry type to entry property
  @Input() entry: Entry;
}
