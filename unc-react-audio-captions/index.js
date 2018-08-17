/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import { render } from 'react-dom';

import { AudioCaptions, Caption } from 'unc-react-audio-captions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../common/css/default.css';
import '../common/css/prism.css';
import '../common/js/prism';

class App extends React.Component {
  render() {
    return (
      <div className="unc-wrapper">
        <a href="https://github.com/jpbaena13/unc-react-audio-captions"
            target="_blank"
            className="btn btn-light btn-github">Fork this on GitHub</a>

        <h1>
          React Audio Captions Component
          <small>Simple a  powerful react audio captions component</small>
        </h1>

        <section>
          <h2>Install</h2>
          This package is available on npm as <strong>unc-react-audio-captions</strong>.
          Install it using <code>npm install unc-react-audio-captions</code>.
          You will need the <code>react</code>, <code>react-dom</code> and <code>animate.css</code> packages.
        </section>

        <section>
        <h2>Setup</h2>
          Start by rendering the <code>{'<AudioCaptions/>'}</code> component into an element
          on the app and add some <code>{'<Caption/>'}</code> components within it. 
          Sets a <code>start</code> prop with the number of seconds it should appear.

          <pre>
            <code className="language-jsx">
              { `
                import React from 'react';
                import { render } from 'react-dom';
                import { AudioCaptions, Caption } from 'unc-react-audio-captions';

                import 'animate.css/animate.min.css';

                render(
                  <AudioCaptions src="audio.mp3" controls>
                    <Caption start="2">
                      Caption starting in second 2
                    </Caption>

                    <Caption start="3" animation="rotateIn">
                      <h4>Caption with diferent animation</h4>
                    </Caption>

                    <Caption start="4" noDisplay>
                      Caption with display:none
                    </Caption>

                    <Caption start="5" end="6">
                      Caption that ends in the second 6
                    </Caption>
                  </AudioCaptions>,
                  document.getElementById('app')
                );
              `}
            </code>
          </pre>
        </section>

        <section>
          <h2>Example</h2>
          Play the audio.

          <AudioCaptions src="audio.mp3" controls>
            <Caption start="2">
              Caption starting in second 2
            </Caption>

            <Caption start="4" animation="rotateIn">
              <h4>Caption with diferent animation</h4>
            </Caption>

            <Caption start="8" noDisplay>
              Caption with display:none
            </Caption>

            <Caption start="6" end="10">
              Caption that ends in the second 6
            </Caption>
          </AudioCaptions>
        </section>

        <section>
          <h2>Configuration</h2>
          
          <code>{'<AudioCaptions />'}</code> properties:
          
          <ul>
            <li><span>src</span> Specifies the URL of an audio</li>
            <li><span>controls</span> Specifies that audio controls should be displayed</li>
            <li><span>autoPlay</span> Specifies that the audio will start playing as soon as it is ready</li>
          </ul>

          <code>{'<Caption />'}</code> properties:
          
          <ul>
            <li><span>start</span>Specifies the second in the audio in which it should appear</li>
            <li><span>end</span> Specifies the second in the audio in which it should hidden</li>
            <li><span>animation</span> Specifies type animation according to the animate.css library</li>
            <li><span>noDisplay</span> Sets to <code>none</code> the display property for the caption as long as it is not visible</li>
          </ul>

          <strong>Important: the ended captions have set <code>display:none</code> in instead of <code>opacity:0</code></strong>
        </section>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app-wrapper')
);
