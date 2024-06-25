import { Component } from '@angular/core';
import {ReadingSectionComponent} from "../reading-section/reading-section.component";

@Component({
  selector: 'thb-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    ReadingSectionComponent
  ]
})
export class AboutComponent {

}
