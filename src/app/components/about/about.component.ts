import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  frontEnd: Array<String> = [
    "HTML5/CSS3/Bootstrap",
    "Angular",
    "React",
    "UI/UX",
    "JavaScript",
    "Node",
    "Web designing",
    "Django"
  ];

  backEnd: Array<String> = ["Java", "Python", "Spring-boot", "Maven", "Django"];

  constructor() {}

  ngOnInit() {}
}
