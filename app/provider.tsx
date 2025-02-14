'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}
