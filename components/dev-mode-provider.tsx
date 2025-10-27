"use client"

import { createContext, useContext, ReactNode } from 'react'

interface DevModeContextType {
  isDev: boolean
}

const DevModeContext = createContext<DevModeContextType>({
  isDev: false
})

export function useDevMode() {
  return useContext(DevModeContext)
}

interface DevModeProviderProps {
  children: ReactNode
}

export function DevModeProvider({ children }: DevModeProviderProps) {
  // Check if we're in development mode
  const isDev = process.env.NODE_ENV === 'development'
  
  return (
    <DevModeContext.Provider value={{ isDev }}>
      {children}
    </DevModeContext.Provider>
  )
}