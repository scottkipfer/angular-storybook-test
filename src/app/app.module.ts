import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {IconButtonComponent} from './icon-button/icon-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonGroupComponent,
    IconButtonComponent,
    CheckboxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  exports: [
    MatIconModule, MatButtonModule, ButtonComponent, ButtonGroupComponent, IconButtonComponent, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
