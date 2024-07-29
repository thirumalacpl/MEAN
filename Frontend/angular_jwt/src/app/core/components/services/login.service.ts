import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }
    //get method
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  // post method
  authLogin(authParams:any): Observable<any[]> {
    console.log(authParams)
   // let authpara = authParams
    return this.http.post<any>(`http://localhost:5000/api/users/login`,authParams);
  }

  //get method
  getProfile(): Observable<any[]> {
    let header = new HttpHeaders().set(
        "cookie",'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE3Y2MwMWRkMjRlN2ViYmNjYjc4ODAiLCJpYXQiOjE3MjIyNzQyNjIsImV4cCI6MTcyMjI3Nzg2Mn0.rzIDfeo862zJFFYHP8pLwnlH3gNXptwKTfPBvB3yIDk'
      );
    //const headers = { 'token': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE3Y2MwMWRkMjRlN2ViYmNjYjc4ODAiLCJpYXQiOjE3MjIyNzM4NzcsImV4cCI6MTcyMjI3NzQ3N3' }
    return this.http.get<any[]>(`http://localhost:5000/api/users/profile`, {headers:header} );
  }

//   getPostById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
//   }

//   addPost(post: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/posts`, post);
//   }

//   updatePost(id: number, post: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
//   }

//   deletePost(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
//   }
}