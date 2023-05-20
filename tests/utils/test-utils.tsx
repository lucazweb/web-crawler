import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from '@/presentation/styles/theme'
import { ReduxProvider } from '@/infra'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
