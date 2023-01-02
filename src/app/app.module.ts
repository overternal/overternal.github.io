import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedBlockComponent } from './components/feed-block/feed-block.component';
import { GridAreaDirective } from './directives/grid-area.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeedBlockComponent,
    GridAreaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
