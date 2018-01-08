import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {ButtonGroupComponent} from './button-group/button-group.component';
import {IconButtonComponent} from './icon-button/icon-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonGroupComponent,
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatIconModule, MatButtonModule, ButtonComponent, ButtonGroupComponent, IconButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
