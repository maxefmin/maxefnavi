import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserNavigation } from 'navi'
import pages from './pages'
import App from './App';

async function main() {
  let navigation = createBrowserNavigation({ pages })

  // Odota kunnes async sisalto on valmis.
  await navigation.steady()

ReactDOM.render(
    <App navigation={navigation} />,
    document.getElementById('root')
  );
}

// Kaynnista app
main()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
