import { Component, OnInit } from "@angular/core";
import { BloggerService } from "src/app/services/blogger.service";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"]
})
export class BlogsComponent implements OnInit {
  blog: Array<Object>;

  constructor(private bloggerService: BloggerService) {}

  ngOnInit() {
    this.bloggerService.getAllBlogs().subscribe(
      blogs => {
        this.blog = blogs["items"];
      },
      err => console.log("Please try after some time!" + err)
    );
  }
}
