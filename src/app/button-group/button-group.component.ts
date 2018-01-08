import { Component, Input } from '@angular/core';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
  @Input() buttons?: any;
}
