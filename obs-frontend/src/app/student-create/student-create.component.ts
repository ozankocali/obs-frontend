import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student:Student =new Student();

  constructor(private studentService:StudentService,
              private router:Router ) { }
 
  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe(response=>{
      console.log(response)
    },
    error=>console.log(error));
  }

  goToStudentList(){
    this.router.navigate(["/students"]);
  }

  onSubmit(){
    this.saveStudent();
    this.goToStudentList();
  }
  

}
