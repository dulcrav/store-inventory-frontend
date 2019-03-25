import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PcService } from 'src/app/services/pc.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Pc } from 'src/app/model/pc.model';


@Component({
  selector: 'app-pc-assortment',
  templateUrl: './pc-assortment.component.html',
  styleUrls: ['./pc-assortment.component.css']
})
export class PcAssortmentComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private pcService: PcService) { }

  displayedColumns: string[] = ['name', 'year'];
  dataSource = new MatTableDataSource(this.pcService.getAllPcs());
  isLoading = true;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
