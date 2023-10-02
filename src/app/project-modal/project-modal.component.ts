import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  projectName: string | undefined;
  projectText: string | undefined;
  projectUrl: string | undefined;
  projectGH: string | undefined;
  faLink = faLink;
  faGithub = faGithub;

  ngOnInit() {
    console.log(this.data);
    switch (this.data) {
      case "travel":
        this.projectName = "Travel Health";
        this.projectText = "Angular application hosted using Google's Firebase. Provides information about travel vaccinations, travel safety advisory, and US visa requirements. Data compiled from the CDC and the US State Department.";
        this.projectUrl = "https://country-data-81ef9.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/country-data";
        break;
      case "news":
        this.projectName = "News Watch";
        this.projectText = "";
        this.projectUrl = "https://news-watch-6b49e.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/news-watch";
        break;
      case "prattle":
        this.projectName = "Prattle";
        this.projectText = "While the meat of the application is still under construction, this project started as a test over ";
        this.projectUrl = "https://prattle-3d614.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/prattle-app";
        break;
      case "covid":
        this.projectName = "COVID Watcher";
        this.projectText = "";
        this.projectUrl = "https://ethanrmcdowell.github.io/covid-watcher-2.0/";
        this.projectGH = "https://github.com/ethanrmcdowell/covid-watcher-2.0";
        break;
      default:
        this.projectName = "ERROR";
        this.projectText = "";
        this.projectUrl = "";
        this.projectGH = "";
    }
  }
}
