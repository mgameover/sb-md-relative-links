import { storiesOf } from '@storybook/angular';
import markdownNotes from './markdown.md';


storiesOf('Markdown', module)
    .add('Link test', () => ({
        template: 'see docs tab',
    }),
        {
            viewMode: 'docs',
            a11y: { disabled: true },
            knobs: { disabled: true },
            actions: { disabled: true },
            notes: { markdown: markdownNotes },
        }
    );
