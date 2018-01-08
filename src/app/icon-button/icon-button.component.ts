import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input() buttonText: String;
  @Input() buttonColor?: String;
  @Input() buttonIcon?: String;
  @Input() disabled = false;
}
