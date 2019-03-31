import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AssortmentService } from 'src/app/services/assortment.service';
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

  allPcs: Pc[] = [];
  
  constructor(private assortmentService: AssortmentService) { }

  displayedColumns: string[] = ['id', 'name', 'quantity', 'edit'];
  dataSource = new MatTableDataSource<Pc>();
  isLoading = true;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.assortmentService.getAllPcs().subscribe(pcs => {
      this.isLoading = false;
      this.allPcs = pcs;
      this.dataSource.data = this.allPcs }
    );
  }

}
