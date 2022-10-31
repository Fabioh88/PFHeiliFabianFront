import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='https://backendfah.herokuapp.com/personas/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.url+'lista');
  }

  public detail(id:number): Observable<persona>{
    return this.httpClient.get<persona>(this.url+`detail/${id}`);
  }
  public save (persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.url+'crear',persona);
  }
  public update (id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.url+`update/${id}`,persona);
  }
  public delete (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url+`delete/${id}`);
  }
 
 
}
