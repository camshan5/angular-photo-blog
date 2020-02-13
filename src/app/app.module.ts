// Root module to the application
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { EntryListComponents } from "./entries/entry-list/entry-list.components";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, EntryListComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
