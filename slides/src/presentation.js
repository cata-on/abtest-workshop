// Import React
import React from 'react';

// Import Spectacle Core tags
import CodeSlide from 'spectacle-code-slide';
import Terminal from 'spectacle-terminal';
import Typist from 'react-typist';
import Loading from 'react-loading';

import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import elementOneDefault from './assets/img/element_one-default.png';
import elementOneVariantB from './assets/img/element_one-variant_b.png';
import elementTwoDefault from './assets/img/element_two-default.png';
import elementTwoVariantB from './assets/img/element_two-variant_b.png';

// Require CSS
require('normalize.css');

const theme = createTheme({
  accent: '#ed174c',
  dark: 'rgb(50, 50, 50)',
  normal: '#dadada'
});

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 500
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} theme={theme}>
        <Slide transition={[]} bgColor="dark">
          <Heading size={1} fit textColor="accent">
            AB Testing
          </Heading>
          <Text textColor="normal">A team exercise</Text>
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={1} textColor="accent">
            Goal
          </Heading>
          <Text textColor="normal">
            Create a React AB Testing utility library
          </Text>
          <List textColor="normal">
            <ListItem>
              Allows us to test entire pages{' '}
              <span style={{ color: '#ed174c' }}>(A/B Testing)</span>
            </ListItem>
            <ListItem>
              Allows us to test subsections of a page{' '}
              <span style={{ color: '#ed174c' }}>(Multi variant)</span>
            </ListItem>
            <ListItem>Contains no business logic</ListItem>
            <ListItem>
              Integrate with <span style={{ color: '#ed174c' }}>Maxymiser</span>
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="json"
          ranges={[{ loc: [0, 100], title: 'maxymiser.json' }]}
          code={require('./assets/maxymiser.example.js').default}
        />

        <Slide transition={[]} bgColor="dark">
          <Heading size={6} textColor="accent">
            Element One - Default
          </Heading>
          <Image src={elementOneDefault} width="80%" />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={6} textColor="accent">
            Element One - Variant B
          </Heading>
          <Image src={elementOneVariantB} width="80%" />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={6} textColor="accent">
            Element Two - Default
          </Heading>
          <Image src={elementTwoDefault} width="80%" />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={6} textColor="accent">
            Element Two - Variant B
          </Heading>
          <Image src={elementTwoVariantB} width="80%" />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            Setup
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>
                    git clone git@github.com:catalinonutu3/abtest-workshop.git
                  </p>
                </div>,
                <div>
                  <p>
                    git clone git@github.com:catalinonutu3/abtest-workshop.git
                  </p>
                  <p style={{ color: '#33B969' }}>
                    Cloning into 'abtest-workshop'...
                  </p>
                </div>,
                <div>
                  <p>
                    git clone git@github.com:catalinonutu3/abtest-workshop.git
                  </p>
                  <p style={{ color: '#33B969' }}>
                    Cloning into 'abtest-workshop'...
                  </p>
                  <p style={{ color: '#33B969' }}>
                    remote: Counting objects: 126, done.<br />
                    remote: Compressing objects: 100% (92/92), done.<br />
                    remote: Total 126 (delta 41), reused 115 (delta
                    30),pack-reused 0 <br />
                    Receiving objects: 100% (126/126), 2.14 MiB | 1.19 MiB/s,
                    done. <br />
                    Resolving deltas: 100% (41/41), done.
                  </p>
                </div>
              ]
            ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            react-ab <span style={{ color: '#dadada' }}>setup</span>
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>cd abtest-workshop/packages/react-ab</p>
                </div>,
                <div>
                  <p>cd abtest-workshop/packages/react-ab</p>
                  <p>npm i</p>
                </div>,
                <div>
                  <p>cd abtest-workshop/packages/react-ab</p>
                  <p>npm i</p>
                  <p style={{ color: '#33B969' }}>
                    npm WARN react-ab@0.0.0 No description<br />
                    npm WARN react-ab@0.0.0 No repository field.<br />
                    <br />
                    up to date in 7.697s
                  </p>
                </div>
              ]
            ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            react-ab <span style={{ color: '#dadada' }}>setup</span>
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>npm link</p>
                </div>,
                <div>
                  <p>npm link</p>
                  <p style={{ color: '#33B969' }}>
                    npm WARN react-ab@0.0.0 No description<br />
                    npm WARN react-ab@0.0.0 No repository field.<br />
                    <br />
                    up to date in 4.101s<br />
                    /usr/local/lib/node_modules/react-ab ->
                    /Users/nicu.ciocan/work/workshop/abtest-workshop/packages/react-ab
                  </p>
                </div>
              ]
            ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            shopping-app <span style={{ color: '#dadada' }}>setup</span>
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>cd ../shopping-app</p>
                </div>,
                <div>
                  <p>cd ../shopping-app</p>
                  <p>npm i</p>
                </div>,
                <div>
                  <p>cd ../shopping-app</p>
                  <p>npm i</p>
                  <p style={{ color: '#33B969' }}>
                    npm WARN shopping-app@0.0.0 No repository field.<br />
                    up to date in 4.347s{' '}
                  </p>
                </div>
              ]
            ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            shopping-app <span style={{ color: '#dadada' }}>setup</span>
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>npm link react-ab</p>
                </div>,
                <div>
                  <p>npm link react-ab</p>
                  <p style={{ color: '#33B969' }}>
                    /Users/nicu.ciocan/work/workshop/abtest-workshop/packages/shopping-app/node_modules/react-ab
                    -> /usr/local/lib/node_modules/react-ab ->
                    /Users/nicu.ciocan/work/workshop/abtest-workshop/packages/react-ab
                  </p>
                </div>
              ]
            ]}
          />
        </Slide>

        <Slide transition={[]} bgColor="dark">
          <Heading size={5} textColor="accent">
            shopping-app <span style={{ color: '#dadada' }}>run</span>
          </Heading>

          <Terminal
            title="abtest-workshop"
            isMaximized={false}
            output={[
              [
                <div>
                  <p>npm start</p>
                </div>
              ]
            ]}
          />
        </Slide>

        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require('./assets/experiments.data.js').default}
          ranges={[{ loc: [0, 100], title: 'Import experiments data' }]}
        />

        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require('./assets/experiment.example.js').default}
          ranges={[
            { loc: [0, 100], title: 'experiments/runningExperiments.js' }
          ]}
        />

        <Slide transition={[]} bgColor="dark">
          <Heading size={1} textColor="accent">
            How to approach
          </Heading>
          <List textColor="normal">
            <ListItem>
              Components are dumb and have no idea about any experiment
            </ListItem>
            <ListItem>
              Components are aware of experiments and they contain logic for all
              variants
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require('./assets/code.variant1.js').default}
          ranges={[
            { loc: [0, 100], title: 'Conditional rendering' },
            { loc: [2, 3] },
            { loc: [3, 4], note: 'Default component' },
            { loc: [5, 6], note: 'Same component, aware of the experiment' }
          ]}
        />

        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          lang="js"
          code={require('./assets/code.variant2.js').default}
          ranges={[
            { loc: [0, 100], title: 'Duplicate Component' },
            { loc: [1, 6], note: 'Default component' },
            {
              loc: [6, 12],
              note: 'Duplicated component, custom for a given experiment'
            }
          ]}
        />

        <Slide transition={[]} bgColor="dark">
          <Heading size={1} fit textColor="accent">
            Good luck!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
