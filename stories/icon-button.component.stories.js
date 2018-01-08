import {storiesOf } from '@storybook/angular';
import {AppModule} from "../src/app/app.module";
import {IconButtonComponent} from "../src/app/icon-button/icon-button.component";

storiesOf('Icon Button Component', module).add('Basic Icon Button', () => ({
  component: IconButtonComponent,
  props: {
    buttonIcon: 'star'
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Primary Icon Button', () => ({
  component: IconButtonComponent,
  props: {
    buttonIcon: 'star',
    buttonColor: 'primary'
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Disabled Icon Button', () => ({
  component: IconButtonComponent,
  props: {
    buttonIcon: 'star',
    buttonColor: 'primary',
    disabled: true
  },
  moduleMetadata: {
    imports: [AppModule]
  }
}));
