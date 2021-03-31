import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl="http://localhost:8090/api/v1/students"

  constructor(private httpClient:HttpClient) { }

  getStudentsList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  createStudent(student:Student):Observable<Object>{
    return this.httpClient.post<Student>(`${this.baseUrl}/save`,student);
  }

  getStudentById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(student:Student):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update`,student);
  }


}
