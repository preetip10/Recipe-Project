import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  onCreatePost( postData: { title: string; content: string} ) {
    //console.log(postData);
    this.http.post('https://http-app-88981.firebaseio.com/posts.json', 
      postData, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')} )
    .subscribe(data => {
      console.log(data);
    });
  }

  onFetchPst() {

  }

}
