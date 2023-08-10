import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<any>('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10').subscribe(data => {
      this.jokes = data.jokes;
      console.log(this.jokes);
    });

  }

}
