import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey = '7udMx5d9GL1sAodGXoBLUS6rpJBWRC6AuCPsQEFi';
  private apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  private http = inject(HttpClient);

  constructor() { }


  getImageOfTheDay(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
