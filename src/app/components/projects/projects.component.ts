import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../../../../src/app/services/projects.service";
import { ProjectDetails } from "src/app/models/project_details.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  project_details: Array<ProjectDetails>;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    // Retrieve all repositories
    this.projectService.getUserProjects().subscribe(
      data => {
        this.project_details = Object.values(data);
      },
      err =>
        console.log(
          "Error: " + err + "Could not found any data! Please try again later."
        )
    );
  }
}
