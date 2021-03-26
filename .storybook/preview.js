import { addDecorator, addParameters, moduleMetadata } from '@storybook/angular';
//import { prepareForInline } from '@storybook/addon-docs/angular/inline';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addParameters({
  docs: {
    // iframeHeight: '60px',
    inlineStories: true,
    //  prepareForInline,
    disable: false,
    extractComponentDescription: (component, { notes }) => {
      debugger;
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  }
});
