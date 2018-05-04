import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseService } from './course/course.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
