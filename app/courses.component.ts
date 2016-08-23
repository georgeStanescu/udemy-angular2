import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow>
    <div *ngIf="courses.length > 0">
      List of courses:
    </div>
    <div [hidden]="courses.length > 0">
      You don't have any courses
    </div>
    <ul>
      <li *ngFor="#course of courses">
        {{course}}
      </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent { 
  title: string = "The title of courses page";
  courses: string[] = [];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}