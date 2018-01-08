import { storiesOf } from '@storybook/angular';
import {AppModule} from "../src/app/app.module";


import {AppComponent } from "../src/app/app.component";
import {ButtonComponent} from "../src/app/button/button.component";
import {ButtonGroupComponent} from "../src/app/button-group/button-group.component";

storiesOf('AppComponent', module).add('Regular Component', () => ({
  component: AppComponent,
  props: {
    title: 'app'
  },
}));

storiesOf('Buttons', module).add('Button', () => ({
  component: ButtonComponent,
  props: {
    buttonText: 'Button',
    buttonColor: 'primary'
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Button With Icon',() => ({
  component: ButtonComponent,
  props: {
    buttonText: 'Button',
    buttonIcon: 'account_circle',
    buttonColor: 'warn'
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Disabled Button', () => ({
  component: ButtonComponent,
  props: {
    buttonText: 'Disabled',
    disabled: true
  },
  moduleMetadata: {
    imports: [AppModule]
  }
}));

storiesOf('Button Group', module).add('Button Group', () => ({
  component: ButtonGroupComponent,
  props: {
    buttons: [{
      text: 'Basic',
      disabled: false
    },{
      text: 'Primary',
      color: 'primary',
      disabled: false
    },{
      text: 'Warning',
      color: 'warn',
      disabled: false
    }, {
      text: 'Accent',
      color: 'accent',
      disabled: false
    }, {
      text: 'Disabled',
      disabled: true
    }]
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Icon Button Group', () => ({
  component: ButtonGroupComponent,
  props: {
    buttons: [{
      icon: 'star',
      disabled: false
    },{
      icon: 'star',
      color: 'primary',
      disabled: false
    },{
      icon: 'star',
      color: 'warn',
      disabled: false
    }, {
      icon: 'star',
      color: 'accent',
      disabled: false
    }, {
      icon: 'star',
      disabled: true
    }]
  },
  moduleMetadata: {
    imports: [AppModule]
  }
}));


