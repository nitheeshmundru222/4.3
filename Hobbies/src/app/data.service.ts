import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hobbies } from './hobbies';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url : string = 'http://localhost:3010/hobbies'
  constructor(private http: HttpClient) { }

 

getAllHobby():Observable<Hobbies[]>{
  return this.http.get<Hobbies[]>(this.url);
}


getHobbyId(id:string):Observable<Hobbies>{
  return this.http.get<Hobbies>(this.url+'/'+id);
}


deleteHobbyById(id:string):Observable<Hobbies>{
  
  return this.http.delete<Hobbies>(this.url+'/'+id);
}


updateHobbyById(hobby:Hobbies):Observable<Hobbies>{
  return this.http.put<Hobbies>(this.url+'/'+hobby._id,hobby);
}

createHobby(hobby:Hobbies):Observable<Hobbies> {
 console.log('am hit')
  return this.http.post<Hobbies>(this.url,hobby);
}
}
