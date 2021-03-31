import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  student:Student=new Student();
  id:number;

  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];
    this.studentService.getStudentById(this.id).subscribe(response=>{
      this.student=response;
    },error=>console.log(error));
  }

  goToStudentList(){
    this.router.navigate(["/students"]);
  }

  onSubmit(){
    this.studentService.updateStudent(this.student).subscribe(response=>{
      this.goToStudentList();
    },error=>console.log(error));
  }
  

}
