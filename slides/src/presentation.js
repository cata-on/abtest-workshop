// Import React
import React from 'react';

// Import Spectacle Core tags
import CodeSlide from 'spectacle-code-slide';
import {
  Spectacle,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          Hello
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require('./test.js').default}
          ranges={[
            { loc: [0, 7], title: 'HelloWorld.js' },
            { loc: [0, 1], note: 'ES6 import ceremony' },
            { loc: [2, 5], note: "A simple 'fat arrow' function" },
            { loc: [6, 7], note: 'Make it the default export' },
            { loc: [3, 4], note: 'Spooky JSX part' },
          ]}
        />
      </Deck>
    );
  }
}
