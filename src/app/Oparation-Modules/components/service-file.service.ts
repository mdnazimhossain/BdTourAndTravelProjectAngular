import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Package } from "./model/model";


const baseUrl = 'http://localhost:8081/api/packages';

@Injectable({
  providedIn: 'root'
})


export class ServiceFileService {
 


  constructor(private http: HttpClient) { }


 
  
  getAll(): Observable<Package[]> {
    return this.http.get<Package[]>(baseUrl);
  }

  get(id: any): Observable<Package> {
    return this.http.get<Package>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  
// find by title
  findByTitle(title: any): Observable<Package[]> {
    return this.http.get<Package[]>(`${baseUrl}?title=${title}`);
  }







}
