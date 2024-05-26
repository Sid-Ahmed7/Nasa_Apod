import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-apod';
  imgOfTheDay: string = '';
  titleofImage: string = '';

  constructor(private nasaService: NasaService) {}
  
  

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((data: any) => {
      this.imgOfTheDay = data.url;
      this.titleofImage = data.title;
    });
  }
}
