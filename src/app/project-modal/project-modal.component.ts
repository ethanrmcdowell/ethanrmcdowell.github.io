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
        this.projectName = "News Mouse";
        this.projectText = "Uses NewData.io API to show the day's top news stories. Features include ability to search the past news archive, view articles in English, Spanish, or French, and favorite/bookmark functionality for authenticated users. Built using Angular and hosted on Firebase while utilizing Firestore and Firebase Authentication.";
        this.projectUrl = "https://news-mouse.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/news-mouse";
        break;
      case "prattle":
        this.projectName = "Prattle";
        this.projectText = "While the meat of the application is still under construction, this project started as a way to learn Google's Firebase authentication and databasing.";
        this.projectUrl = "https://prattle-3d614.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/prattle-app";
        break;
      case "covid":
        this.projectName = "COVID Watcher";
        this.projectText = "Charted data on global data, US data, and vaccination numbers for COVID.";
        this.projectUrl = "https://ethanrmcdowell.github.io/covid-watcher-2.0/";
        this.projectGH = "https://github.com/ethanrmcdowell/covid-watcher-2.0";
        break;
      case "question":
        this.projectName = "Ask Me";
        this.projectText = "Ask me anything and I'll get back to you! Utilizes Firebase hosting, authentication, and cloud database. Lock icon in the top-left corner enables admin panel, feel free to log in using admin@admin.com with the password 'adminTest'!";
        this.projectUrl = "https://ask-me-1b00c.web.app/";
        this.projectGH = "https://github.com/ethanrmcdowell/ask-me";
        break;
      default:
        this.projectName = "ERROR";
        this.projectText = "";
        this.projectUrl = "";
        this.projectGH = "";
    }
  }
}
