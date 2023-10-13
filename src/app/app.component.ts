import { Component } from '@angular/core';

import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircleNotch, faLink, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'updated-portfolio';
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faCircleNotch = faCircleNotch;
  faLink = faLink;
  faArrowDown = faArrowDown;

  constructor(public dialog: MatDialog) {}

  openModal(project: string) {
    console.log("Clicked " + project);

    const dialogRef = this.dialog.open(ProjectModalComponent, {
      data: project,
      panelClass: 'project-dialog',
      height: '40%',
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
