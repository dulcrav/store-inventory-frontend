import { Injectable } from '@angular/core';
import { Pc } from '../model/pc.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  constructor(private http: HttpClient) { }

  getAllPcs(): Observable<Pc[]> {
    return this.http.get<Pc[]>(BASE_URL + '/allPcs');
  }
}
