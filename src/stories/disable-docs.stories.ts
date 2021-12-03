import { storiesOf } from '@storybook/angular';
import markdownNotes from './target.md';


storiesOf('Disabled docs', module)
    .add('Primary', () => ({
        template: 'see docs tab',
    }),
        {
            viewMode: 'docs',
            a11y: { disabled: true },
            knobs: { disabled: true },
            actions: { disabled: true },
            notes: { markdown: markdownNotes },
            docs: { disable: true, }
        }
    ) 
    .add('Another story 1', () => ({
        template: 'see docs tab',
    }),
        {
            viewMode: 'docs',
            a11y: { disabled: true },
            knobs: { disabled: true },
            actions: { disabled: true },
            notes: { markdown: markdownNotes },
            docs: { disable: true, }
        }
    )
    .add('Another story 2', () => ({
        template: 'see docs tab',
    }),
        {
            viewMode: 'docs',
            a11y: { disabled: true },
            knobs: { disabled: true },
            actions: { disabled: true },
            notes: { markdown: markdownNotes },
            docs: { disable: true, }
        }
    );
