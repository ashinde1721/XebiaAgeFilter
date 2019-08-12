import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderBy } from './pipes/orderBy';
import { AgeComponent } from './component/age.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './component/pagination/pagination.component';
import { PersonService } from './services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    AgeComponent,
    PaginationComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    PaginationModule.forRoot()
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
