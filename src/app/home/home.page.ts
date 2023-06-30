import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = 'b0d6e4609dff4b86b45e86e8b38b712d';

interface NewsResponse {
  articles: any[];
  // Other properties from the response if needed
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsData: any[]; // Add the newsData property declaration

  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get<NewsResponse>(`${API_URL}/top-headlines?country=Ireland&apiKey=${API_KEY}`)
      .subscribe((results) => {
        console.log(results);
        this.newsData = results.articles;
      });
  }
}
