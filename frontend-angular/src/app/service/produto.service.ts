import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from "rxjs/index";
import { environment } from 'src/environments/environment';
import { Produto } from '../model/Produto.model';


@Injectable()
export class ProdutoService {

  constructor(
    private http: HttpClient) { }
    private baseUrl: string = 'http://localhost:8080/api/produto/';


    create(user: Produto): Observable<any> {
      return this.http.post<any>(this.baseUrl + 'produto', user);
    }

    delete(id: any): Observable<any>{
        return this.http.delete<any>(`${this.baseUrl}${id}`);
    }

    get() : Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }
    
    getById(id: number): Observable<any> {
      return this.http.get(this.baseUrl + id);
    }

    update(id: number, prod: Produto): Observable<any> {
      return this.http.put<any>(this.baseUrl + prod.id, prod);
    }

}
