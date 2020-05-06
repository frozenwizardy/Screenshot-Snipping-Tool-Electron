import React from 'react';
import { Navbar, Button, Alignment, Icon } from '@blueprintjs/core';

import './App.css';

function App() {
  const onSnipClick = async () => {
      console.log('todo: making screenshot');
      console.log(window);
      const { desktopCapturer, remote } = window.require('electron');
      const screen = remote.screen;

      try {
          const sources = await desktopCapturer.getSources({
              types: ['screen']
          });
          const entireScreenSource = sources
              .find(source => source.name === 'Entire Screen' || source.name === 'Screen 1');

          if (entireScreenSource) {
              console.log(entireScreenSource);
          }
      } catch (err) {
          console.error(err);
      }
  };

  return (
    <div className="App">
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Electron Snip</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="settings" text="Settings" />
          <Button className="bp3-minimal" icon="help" text="About" />
          <Button
              className="bp3-minimal"
              icon="camera"
              text="Snip"
              onClick={onSnipClick}
          />
        </Navbar.Group>
      </Navbar>
      <main className="App-main">
        <Icon icon="camera" iconSize={100} />
        <p>Electron Snip</p>
      </main>
    </div>
  );
}

export default App;
