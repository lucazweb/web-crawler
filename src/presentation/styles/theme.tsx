import React, { PropsWithChildren } from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    buttonBg: 'transparent',
    border: '#2196f3',
    buttonText: '#2196f3',
    hover: '#23b290',
    inactive: '#ccc;',
    error: '#c54a2d',
    dark: '#333',
    textHighlight: '#2196f3',
    textInactive: '#666',
  },
  typography: {
    fontSize: '0.9em',
    inputTextSize: '0.9em',
  },
}

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <StyleThemeProvider theme={theme}>{children}</StyleThemeProvider>
)
