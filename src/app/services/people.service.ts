import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://javasampleapproach.com/frontend/angular/use-angular-httpclient-post-put-delete-data-springboot-rest-apis-angular-4';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/people`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/people/${id}`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/people`, person);
  }

  updatePerson(id: number, person: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/people/${id}`, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/people/${id}`);
  }
}
