import { Injectable } from '@angular/core';
import { Student } from '../shared/student';  
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef: AngularFireList<any>;    
  studentRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  AddStudent(student: Student) {
    this.studentsRef.push({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    mobileNumber: student.mobileNumber
    })
    }
    // Fetch Single Student Object
    GetStudent(id: string) {
    this.studentRef = this.db.object('student-list/' + id);
    return this.studentRef;
    }
    // Fetch Students List
    GetStudentsList() {
    this.studentsRef = this.db.list('student-list');
    return this.studentsRef;
    }  
    // Update Student Object
    UpdateStudent(student: Student) {
    this.studentRef.update({
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    mobileNumber: student.mobileNumber
    })
    }  
    // Delete Student Object
    DeleteStudent(id: string) { 
    this.studentRef = this.db.object('student-list/'+id);
    this.studentRef.remove();
    }
}
