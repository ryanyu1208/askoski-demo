import { Component } from '@angular/core';
import { Course } from './course/course';
import { CourseService} from './course/course.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courseData: Course[];
  
  constructor(private courseService: CourseService) {
    
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courseData = courses;
    });
  }

}
