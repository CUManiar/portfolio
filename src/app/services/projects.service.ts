import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  project_url = "https://api.github.com/users/CUManiar/";

  constructor(private http: HttpClient) {}

  getUserProjects = () => {
    return this.http.get(this.project_url + "repos");
  };
}
