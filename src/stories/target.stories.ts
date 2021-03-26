import { storiesOf } from '@storybook/angular';
import markdownNotes from './target.md';


storiesOf('Markdown', module)
    .add('Target', () => ({
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
