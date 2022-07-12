import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'

const App: React.FC = (): JSX.Element => {
  return (
    <div className='app'>
      <Header />
      <main className='w-[900px] m-auto mt-10 mb-10'>
        <Counter />
      </main>
    </div>
  )
}

export default App
