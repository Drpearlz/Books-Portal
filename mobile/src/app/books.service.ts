import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor( private http: HttpClient) { }
  getBooks() {
    const headers = new HttpHeaders(
      {'Content-Type': 'application/json', 'Accept': 'application/json'});
    const options = {headers: headers};
    return this.http.get(`http://localhost:8000/books/getBooks/`, 
    options)
 
   }
  
    addBook(form: any) : Observable<any> {
      const headers = new HttpHeaders(
        {'Content-Type': 'application/json', 'Accept': 'application/json'});
      const options = {headers: headers};
        return this.http.post(`http://localhost:8000/books/addBook/`, 
       options)
  
    }

}



  // changeBook(email: any, id: any) {
  //   const headers = new HttpHeaders(
  //     {'Content-Type': 'application/json', 'Accept': 'application/json'});
  //   const options = {headers: headers};
  //   console.log(JSON.stringify(email));
  //   return this.http.patch(`http://localhost:8000/books/changeBook/${id}`, 
  //   JSON.stringify({email}), options);
  // }