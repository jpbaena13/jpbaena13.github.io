/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import { render } from 'react-dom';

import Popup from 'unc-react-popup';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/default.css';
import '../common/css/prism.css';
import '../common/js/prism';

import 'unc-react-popup/dist/assets/popup.css';

class App extends React.Component {
  render() {
    return (
      <div className="unc-wrapper">
        <a href="https://github.com/jpbaena13/unc-react-popup"
            target="_blank"
            className="btn btn-light btn-github">Fork this on GitHub</a>

        <h1>
          React Popup Component
          <small>Simple a powerful react popup component</small>
        </h1>

        <section>
          <h2>Install</h2>
          This package is available on npm as <strong>unc-react-popup</strong>.
          Install it using <code>npm install unc-react-popup</code>.
          You will need the <code>react</code> and <code>react-dom</code> packages.
        </section>

        <section>
          <h2>Setup</h2>
          Start by rendering the <code>{'<Popup />'}</code> component within the app as a global component. 
          This component will render each popup instanced. Then use the <code>open</code> static method 
          from Popup instance to create a new popup:

          <pre>
            <code className="language-jsx">
              { `
                import React from 'react';
                import { render } from 'react-dom';
                import Popup from 'unc-react-popup';

                render(
                  <Popup />,
                  document.getElementById('app')
                );

                Popup.open({
                  title: 'Popup Title',
                  content: 'The popup content'
                });
              `}
            </code>
          </pre>

          Click on the button to open a simple popup:
          <button className="btn btn-light" 
                  onClick={
                    () => { 
                      Popup.open({ title: 'Popup Title',
                                   content: 'The popup content'}) 
                    }
                  }>Open Popup</button>
        </section>

        <section>
          <h3>With buttons</h3>
          Sets the <code>btnAccept</code> and/or <code>btnCancel</code> to show the buttons:

          <pre>
            <code className="language-jsx">
              { `
                Popup.open({
                  title: 'Popup Title',
                  content: 'The popup content',
                  btnAccept: true,
                  btnCancel: true
                });
              `}
            </code>
          </pre>
          
          Click on the button to open a popup <strong>with buttons</strong>:
           <button className="btn btn-light" 
                  onClick={
                    () => { 
                      Popup.open({ title: 'Popup Title', 
                                   content: 'The popup content',
                                   btnAccept: true,
                                   btnCancel: true}) 
                    }
                  }>Open Popup</button>
          
        </section>

        <section>
          <h3>Calling to callback buttons</h3>
          Sets the <code>onClickAccept</code> and/or <code>onClickCancel</code> to add 
          a callback function fot the corresponding button:

          <pre>
            <code className="language-jsx">
              { `
                Popup.open({
                  title: 'Popup Title',
                  content: 'The popup content',
                  btnAccept: true,
                  btnCancel: true,
                  onClickAccept: () => { Popup.close(); },
                  onClickCancel: () => { Popup.close(); }
                });
              `}
            </code>
          </pre>
          
          Click on the button to open a popup with <strong>callback functions</strong>:
           <button className="btn btn-light" 
                  onClick={
                    () => { 
                      Popup.open({ title: 'Popup Title', 
                                   content: 'The popup content',
                                   btnAccept: true,
                                   btnCancel: true,
                                   onClickAccept: () => { Popup.close(); },
                                   onClickCancel: () => { Popup.close(); }}) 
                    }
                  }>Open Popup</button>
          
        </section>

        <section>
          <h3>Configuration global component</h3>
          There are multiple options you can set when you attach the popup component:

          <pre>
            <code className="language-jsx">
              { `
                <Popup 
                   className: 'unc-popup',
                   txtAccept: 'Accept',
                   txtCancel: 'Cancel'
                />
                });
              `}
            </code>
          </pre>
        </section>

        <section>
          <h3>Configuration single popup</h3>
          There are multiple options you can set when you crate a new popup:

          <pre>
            <code className="language-jsx">
              { `
                Popup.open({
                  title: 'The popup title',
                  content: 'The popup content',
                  data: 'I really do not know why this :)',
                  btnAccept: 'True or False to show the accept button',
                  btnCancel: 'True or False to show the cancel button',
                  width: 'Sets the popup width',
                  height: 'Set the popup height',
                  minWidth: 'Sets the min width of the popup',
                  maxWidth: 'Sets the max width of the popup',
                  classes: 'Adds a extra classes to the popup container',
                  className: 'Change the className popup',
                  onClickAccept: 'Callback function for the accept button',
                  onClickCancel: 'Callback function for the cancel button',
                  onOpenPopup: 'Callback function when the popup is open',
                  onClosePopup: 'Callback function when the popup is close'
                })
                });
              `}
            </code>
          </pre>
        </section>

        {/* Single instance: This instance renders all popups*/}
        <Popup />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app-wrapper')
);
