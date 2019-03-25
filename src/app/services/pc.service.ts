import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const ALL_PCS: Pc[] = [
  new Pc('Asus ROG GT560', 2018),
  new Pc('Nvidia GeStroke 5650 GTX', 2019),
  new Pc('Tracer RTX 456', 2017),
  new Pc('Dell Inspiron 234', 2018),
  new Pc('Lenovo Thinkstation 56W', 2016),
  new Pc('MSI Gamerstation 56RT', 2018)
]

@Injectable({
  providedIn: 'root'
})
export class PcService {

  constructor() { }

  // getAllPcs(): Observable<Pc[]> {
  //   return of(ALL_PCS);
  // }

  getAllPcs() {
    return ALL_PCS;
  }
}
