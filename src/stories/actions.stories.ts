import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

storiesOf('Actions', module)
    .add('ActionLogger error', () => ({
        template: `<button (click)="onclick($event)">Click me</button>`,
        props: {
            onclick: action('onclick', { depth: 2 }),
        }
    }),
        {
            a11y: { disabled: true },
            knobs: { disabled: true },
        });
