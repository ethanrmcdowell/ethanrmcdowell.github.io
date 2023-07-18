import { Component } from '@angular/core';

import { faInstagram, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
}
