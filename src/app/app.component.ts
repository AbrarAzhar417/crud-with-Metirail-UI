import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditEmployeComponent } from './create-edit-employe/create-edit-employe.component';
import { EmployeService } from './services/employe.service';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator,  } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'crud';
  displayedColumns: string[] = [
    
    'id', 
    'firstName', 
    'lastName', 
    'email', 
    'dob', 
    'gender', 
    'company', 
    'experience', 
    'package', 
    'action',

  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private _dialog:MatDialog,
    private employeService:EmployeService){ }
   
  openAddEditEmploye(){
    this._dialog.open(CreateEditEmployeComponent)
  }

  ngOnInit(): void {
  this.employeService.getEmployeList().subscribe((res:any)=>{
    this.dataSource = new MatTableDataSource(res);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }),console.error();
     
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
deleteemp(id:number){
  this.employeService.deleteEmploye(id).subscribe((res)=>{
    this.ngOnInit()
alert("deleted successfully")
  })
  console.error()
}
}
