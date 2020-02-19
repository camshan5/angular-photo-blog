import { Component, OnInit } from "@angular/core";
import { EntryService } from "..";
import { Entry } from "../shared/entry.model";

@Component({
  selector: "app-entry-list",
  templateUrl: "entry-list.component.html",
  styleUrls: ["entry-list.component.css"]
})
export class EntryListComponent implements OnInit {
  // create entries property
  entries: Entry[];
  constructor(private entryService: EntryService) {}

  ngOnInit() {
    // set components entries prop to be the value returned
    this.entryService.getEntries().then(entries => (this.entries = entries));
  }
}
