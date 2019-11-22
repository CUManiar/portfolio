import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BloggerService {
  httpParams = new HttpParams().set(
    "key",
    "AIzaSyDV2CGJrdMNcV3enRumeqcWLznXpRiEUQM"
  );

  constructor(private http: HttpClient) {}

  getAllBlogs = () => {
    return this.http.get(
      "https://www.googleapis.com/blogger/v3/blogs/465643214099078746/posts?key=AIzaSyDV2CGJrdMNcV3enRumeqcWLznXpRiEUQM"
    );
  };
}
