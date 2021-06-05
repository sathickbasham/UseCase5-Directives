import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomDir} from './custom-directive.directive';
import { SortByPipe} from './sortpipe'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CustomDir,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
