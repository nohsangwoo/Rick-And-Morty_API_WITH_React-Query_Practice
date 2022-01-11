import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Characters from './components/Characters'
// import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  )
}

export default App
