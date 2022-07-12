import React from 'react'
import CounterItem from './CounterItem'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addCounter } from '../../redux/slices/counterSlice'

const Counter: React.FC = (): JSX.Element => {
  const { counters } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='grid grid-cols-3 gap-3 mb-12'>
        {counters.length !== 0 ? (
          counters.map((el) => (
            <CounterItem key={el.id} id={el.id} buttons={el.buttons} value={el.value} />
          ))
        ) : (
          <h1 className='text-5xl text-red-900 text-center w-[900px]'>
            No counters, create a counter by clicking on the button
          </h1>
        )}
      </div>
      <button
        onClick={() => dispatch(addCounter())}
        className='text-2xl w-[200px] h-[40px] bg-violet-600 ml-[5px] text-white rounded-md'
      >
        Create Counter
      </button>
    </>
  )
}

export default Counter
