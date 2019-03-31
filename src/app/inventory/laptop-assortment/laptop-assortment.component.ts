import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Pc } from 'src/app/model/pc.model';
import { AssortmentService } from 'src/app/services/assortment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Laptop } from 'src/app/model/laptop.model';

@Component({
  selector: 'app-laptop-assortment',
  templateUrl: './laptop-assortment.component.html',
  styleUrls: ['./laptop-assortment.component.css']
})
export class LaptopAssortmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allLaptops: Laptop[] = [];
  
  constructor(private assortmentService: AssortmentService, private snackBar: MatSnackBar) { }


  displayedColumns: string[] = ['id', 'name', 'quantity', 'edit'];
  dataSource = new MatTableDataSource<Laptop>();
  isLoading = true;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.assortmentService.getAllLaptops().subscribe(laptops => {
      this.isLoading = false;
      this.allLaptops = laptops;
      this.dataSource.data = this.allLaptops }
    );
  }

}
