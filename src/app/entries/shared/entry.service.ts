import { Entry } from "./entry.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class EntryService {
  // Expose http service to the entry service
  constructor(private http: Http) {}

  // generic type used
  getEntries(): Promise<Entry[]> {
    // call injected http service
    return this.http
      .get("/app/entries")
      .toPromise()
      .then(response => response.json().data as Entry[]);
  }
}
