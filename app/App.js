/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, dark as darkTheme} from '@eva-design/eva';
/* Routes */
import {Router} from './src/routes';

const App = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <Router />
  </ApplicationProvider>
);

export default App;
