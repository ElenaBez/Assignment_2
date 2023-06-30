const environment = {
  production: false,
  API_URL: 'https://newsapi.org/v2',
  API_KEY: 'fe6aedf9ebb5f9db48998c6e307ed05b'
};

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://newsapi.org/v2';
const API_KEY = 'b0d6e4609dff4b86b45e86e8b38b712d';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public httpClient: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient
      .get(`${API_URL}/top-headlines?country=Ireland&apiKey=${API_KEY}`)
      .subscribe((results) => {
        console.log(results);
      });
  }
}

