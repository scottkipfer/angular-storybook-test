import {storiesOf } from '@storybook/angular';
import {AppModule} from "../src/app/app.module";
import {CheckboxComponent} from "../src/app/checkbox/checkbox.component";

storiesOf('Checkbox Component', module).add('Selected Checkbox', () => ({
  component: CheckboxComponent,
  props: {
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Unselected Checkbox', () => ({
  component: CheckboxComponent,
  props: {
    checked: false,
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Checkbox with label', () => ({
  component: CheckboxComponent,
  props: {
    label: 'Checkbox',
  },
  moduleMetadata: {
    imports: [AppModule]
  }
})).add('Disabled', () => ({
  component: CheckboxComponent,
  props: {
    label: 'Checkbox',
    disabled: true
  },
  moduleMetadata: {
    imports: [AppModule]
  }
}));
