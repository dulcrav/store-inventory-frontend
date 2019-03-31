import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Laptop } from '../model/laptop.model';
import { Smartphone } from '../model/smarthphone.model';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AssortmentService {

  constructor(private http: HttpClient) { }

  getAllPcs(): Observable<Pc[]> {
    return this.http.get<Pc[]>(BASE_URL + 'pc');
  }

  getPcById(id: number): Observable<Pc> {
    return this.http.get<Pc>(BASE_URL + 'pc/' + id);
  }

  getAllLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(BASE_URL + 'laptop');
  }

  getLaptopById(id: number): Observable<Laptop> {
    return this.http.get<Laptop>(BASE_URL + 'laptop/' + id);
  }

  getAllSmartphones(): Observable<Smartphone[]> {
    return this.http.get<Smartphone[]>(BASE_URL + 'smartphone');
  }

  getSmartphoneById(id: number): Observable<Smartphone> {
    return this.http.get<Smartphone>(BASE_URL + 'smartphone/' + id);
  }
}
