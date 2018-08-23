/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import { render } from 'react-dom';

import {AudioList, ListSection, ListItem} from 'unc-react-audio-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/default.css';
import '../common/css/prism.css';
import '../common/js/prism';

import 'unc-react-audio-list/dist/assets/css/audio-list.css';

class App extends React.Component {
  render() {
    return (
      <div className="unc-wrapper">
        <a href="https://github.com/jpbaena13/unc-react-audio-list"
            target="_blank"
            className="btn btn-light btn-github">Fork this on GitHub</a>

        <h1>
          React Audio list Component
          <small>Simple a powerful react audio list component</small>
        </h1>

        <section>
          <h2>Install</h2>
          This package is available on npm as <strong>unc-react-audio-list</strong>.
          Install it using <code>npm install unc-react-audio-list</code>.
          You will need the <code>react</code>, <code>react-dom</code> and <code>bootstrap</code> packages.
          Addionally include the Font Awesome CSS library within your app.
        </section>

        <section>
          <h2>Setup</h2>
          Start by rendering the <code>{'<AudioList />'}</code> component within the app 
          and add some <code>{'<ListSection />'}</code>. Each <strong>{'<ListSection />'}</strong> must
          have a audio <strong>src</strong> property. Add some <code>{'<ListItem />'}</code> components
          into each <strong>{'<ListSection />'}</strong> component . The <strong>{'<ListItem />'}</strong> components
          must have configured the <strong>start</strong>, <strong>end</strong> and <strong>title</strong> properties.
          A example is here:

          <pre>
            <code className="language-jsx">
              { `
                import React from 'react';
                import { render } from 'react-dom';
                import { AudioList, ListSection, ListItem } from 'unc-react-audio-list';

                import 'bootstrap/dist/css/bootstrap.min.css';
                import 'unc-react-audio-list/assets/css/audio-list.css';

                render(
                  <AudioList headerImageSrc="header.jpg">
                    <ListSection file="audio.mp3" title="Ley de la cultura">
                      <ListItem start="0" end="4" title="Ley de la cultura" />
                      <ListItem start="5" end="9" title="Cultura y patrimonio cultural" />
                      <ListItem start="10" end="15" title="Generación de Políticas Culturales" />
                      <ListItem start="15" end="24" title="Cuatro títulos la integran" />
                    </ListSection>

                    <ListSection file="audio.ogg" title="Comunidades Negras">
                      <ListItem start="0" end="7" title="Ley 70 de 1993" />
                      <ListItem start="8" end="18" title="Diversidad étnica" />
                      <ListItem start="19" end="30" title="Integralidad y dignidad" />
                    </ListSection>
                  </AudioList>,
                  document.getElementById('app')
                );
              `}
            </code>
          </pre>          
        </section>

        <section>
          <h2>Example</h2>

          <AudioList headerImageSrc="header.jpg">
            <ListSection file="audio.mp3" title="Ley de la cultura">
              <ListItem start="0" end="4" title="Ley de la cultura" />
              <ListItem start="5" end="9" title="Cultura y patrimonio cultural" />
              <ListItem start="10" end="15" title="Generación de Políticas Culturales" />
              <ListItem start="15" end="24" title="Cuatro títulos la integran" />
            </ListSection>

            <ListSection file="audio.ogg" title="Comunidades Negras">
              <ListItem start="0" end="7" title="Ley 70 de 1993" />
              <ListItem start="8" end="18" title="Diversidad étnica" />
              <ListItem start="19" end="30" title="Integralidad y dignidad" />
            </ListSection>
          </AudioList>

        </section>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app-wrapper')
);
