import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Course } from './course';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private url = 'http://localhost:1334'
  private aprCourseUrl = this.url + '/aprcourse/get';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.post<Course[]>(this.aprCourseUrl, null);
  }

}
