import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeService } from '../services/employe.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-edit-employe',
  templateUrl: './create-edit-employe.component.html',
  styleUrl: './create-edit-employe.component.css'
})
export class CreateEditEmployeComponent {

education:any=[
  "Matric",
  "Diploma",
  "Intermediate",
  "Graduate",
  "Post Graduate"
]
empForm:FormGroup;
constructor(private _fb:FormBuilder,
  private empService:EmployeService,
  private dialogRef:DialogRef< CreateEditEmployeComponent>
  
  ){
  this.empForm=this._fb.group({
    firstName:"",
    lastName:"",
    email:"",
    dob:"",
    gender:"",
    education:"",
    company:"",
    experience:"",
    package:"",



  })
}

onFormSubmit() {
  if(this.empForm.valid){
    console.log(this.empForm.value)
    this.empService.addEmploye(this.empForm.value).subscribe(()=>{
      alert("employe Added Sucessfully")
      this.dialogRef.close()
    })
  } error :(err:any)=>{
    console.log(err)
  }
  }
  onedit(){
    
  }
}
