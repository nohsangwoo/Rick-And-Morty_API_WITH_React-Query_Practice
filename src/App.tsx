import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Characters from './components/Characters'
// import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <div className="container">
        <h1>Ric and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  )
}

export default App
