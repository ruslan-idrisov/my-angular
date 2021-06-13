import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "any"
})
export class TestService {
  constructor(private http: HttpClient) {}

  getTestApiData(position: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_limit=${position}`);
  }
}