/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import { render } from 'react-dom';

import { PageTransitions, Page } from 'unc-react-page-transitions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/default.css';
import '../common/css/prism.css';
import '../common/js/prism';

class App extends React.Component {
  render() {
    return (
      <div className="unc-wrapper">
        <a href="https://github.com/jpbaena13/unc-react-page-transitions"
            target="_blank"
            className="btn btn-light btn-github">Fork this on GitHub</a>

        <h1>
          React Page Transitions
          <small>Simple a  powerful react page transitions component</small>
        </h1>

        <section>
          <h2>Install</h2>
          This package is available on npm as <strong>unc-react-page-transition</strong>.
          Install it using <code>npm install unc-react-page-transitions</code>.
        </section>

        <section>
          Start by rendering the <code>{'<PageTransitions/>'}</code> component into an element
          on the app and add some <code>{'<Page/>'}</code> components within it. 
          You will need the <code>react</code> and <code>react-dom</code> packages.

          <pre>
            <code className="language-jsx">
              { `
                import React from 'react';
                import { render } from 'react-dom';
                import { PageTransitions, Page } from 'unc-react-page-transitions';

                class App extends React.Component {
                  render() {
                    return (
                      <div id="example-wrapper" style={{ height: 500, overflow: 'hidden' }}>
                        <button className="btn btn-light" onClick={() => { this.pt.nextPage(); }} 
                                style={{ position: 'absolute', margin: '1em', zIndex: 10 }}>Next Page</button>

                        <PageTransitions ref={ (pt) => { this.pt = pt; } }>
                          <Page style={{ backgroundColor: '#f68dbb' }}>
                            <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
                          </Page>

                          <Page style={{ backgroundColor: '#0ac2d2' }}>
                            <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
                          </Page>

                          <Page style={{ backgroundColor: '#7bb7fa' }}>
                            <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
                          </Page>
                        </PageTransitions>
                      </div>
                    );
                  }
                }

                render(
                  <App />,
                  document.getElementById('app')
                );
              `}
            </code>
          </pre>
        </section>

        <section>
          <h2>Example</h2>
          Click on the button: <i>Next Page</i>.
          <br/><br/>

          <div id="example-wrapper" style={{ height: 500, overflow: 'hidden' }}>
            <button className="btn btn-light" onClick={() => { this.pt.nextPage(); }} 
                    style={{ position: 'absolute', margin: '1em', zIndex: 10 }}>Next Page</button>

            <PageTransitions ref={ (pt) => { this.pt = pt; } }>
              <Page style={{ backgroundColor: '#f68dbb' }}>
                <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
              </Page>

              <Page style={{ backgroundColor: '#0ac2d2' }}>
                <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
              </Page>

              <Page style={{ backgroundColor: '#7bb7fa' }}>
                <h1><small>A Collection of</small><strong>PAGE</strong> TRANSITIONS</h1>
              </Page>
            </PageTransitions>
          </div>
        </section>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app-wrapper')
);
