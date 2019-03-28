import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PcService } from 'src/app/services/pc.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Pc } from 'src/app/model/pc.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pc-assortment',
  templateUrl: './pc-assortment.component.html',
  styleUrls: ['./pc-assortment.component.css']
})
export class PcAssortmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  allPcs: Pc[] = [];
  
  constructor(private pcService: PcService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['id', 'name', 'quantity', 'edit'];
  dataSource = new MatTableDataSource<Pc>();
  isLoading = true;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.snackBar.open('Successfully downloaded data!', null, { duration: 3000, verticalPosition: 'top'});
    this.pcService.getAllPcs().subscribe(pcs => {
      this.isLoading = false;
      this.allPcs = pcs;
      this.dataSource.data = this.allPcs }
    );
  }

}
