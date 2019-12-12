import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Router, View } from 'react-navi';
import { routes } from '../routes';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    }
})

export interface IAppProps {
    className?: string;
}

  export const App: React.FunctionComponent<IAppProps>  = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router routes={routes}>
          <View />
      </Router>
    </ThemeProvider>
  </Provider>
);
