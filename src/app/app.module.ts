import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleDeleteComponent } from './people-delete/people-delete.component';
import { FormsModule } from '@angular/forms';
// mkdir people-management >> cd people-management
@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleEditComponent,
    PeopleDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }