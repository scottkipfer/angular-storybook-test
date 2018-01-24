import {storiesOf } from '@storybook/angular';
import {AppModule} from "../src/app/app.module";
import {HeaderComponent} from "../src/app/header/header.component";

storiesOf('Header Component', module).add('Plain Header', () => ({
  component: HeaderComponent,
  props: {
    text: 'Header'
  },
  moduleMetadata: {
    imports: [AppModule]
  }
}));
