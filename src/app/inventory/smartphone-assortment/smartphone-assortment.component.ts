import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AssortmentService } from 'src/app/services/assortment.service';
import { Smartphone } from 'src/app/model/smarthphone.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-smartphone-assortment',
  templateUrl: './smartphone-assortment.component.html',
  styleUrls: ['./smartphone-assortment.component.css']
})
export class SmartphoneAssortmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allSmartphones: Smartphone[] = [];
  
  constructor(private assortmentService: AssortmentService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'name', 'fingerprintScanner', 'quantity', 'edit'];
  dataSource = new MatTableDataSource<Smartphone>();
  isLoading = true;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.assortmentService.getAllSmartphones().subscribe(smartphones => {
      this.isLoading = false;
      this.allSmartphones = smartphones;
      this.dataSource.data = this.allSmartphones 
    });
  }

}
