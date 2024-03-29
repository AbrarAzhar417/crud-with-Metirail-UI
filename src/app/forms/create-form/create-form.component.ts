import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
// onchangefeature($event: Event) {
//   debugger
// }
//   constructor(private http:HttpClient){


//   }
//   onchangebanner(event:any){
//     debugger

    // zero indext pay find kia 

// const files= event.currentTarget.files[0]

// form ka object banyaa or new formdata likha

// const formObj= new FormData()
// formObj.append('file',files)

// The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist.

// The difference between set() and append() is that if the specified key already exists, set() will overwrite all existing values with the new one, whereas append() will append the new value onto the end of the existing set of values.
// this.http.post('http://localhost:3000/files',formObj).subscribe((res)=>{
//   console.log(res)
// })
//   }

status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
file: File | null = null; // Variable to store file

constructor(private http: HttpClient) {}

ngOnInit(): void {}

// On file Select
onChange(event: any) {
  const file: File = event.target.files[0];

  if (file) {
    this.status = "initial";
    this.file = file;
  }
}




onUpload() {
  if (this.file) {
    const formData = new FormData();

    formData.append('file', this.file, );

    const upload$ = this.http.post("https://httpbin.org/post", formData);

    this.status = 'uploading';

    upload$.subscribe({
      next: () => {
        this.status = 'success';
      },
      error: (error: any) => {
        this.status = 'fail';
        return throwError(() => error);
      },
    });
  }
}
}