import React from 'react'
import { incrementValue, decrementValue, removeCounter } from '../../redux/slices/counterSlice'
import { useAppDispatch } from '../../redux/hooks'

interface CounterItemProps {
  id: number
  value: number
  buttons: number
}

const CounterItem: React.FC<CounterItemProps> = ({ id, value, buttons }): JSX.Element => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    setInterval(() => {
      if (!buttons) {
        dispatch(incrementValue(id))
      }
    }, 1000)
  }, [])

  return (
    <div className='border-2 p-5 rounded-md h-[250px]'>
      <div className='cursor-pointer' onClick={() => dispatch(removeCounter(id))}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6ZM4 8V18H16V8H4ZM7 10H9V16H7V10ZM11 10H13V16H11V10ZM5 3V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V3H20V5H0V3H5ZM7 2V3H13V2H7Z'
            fill='#E07153'
          />
        </svg>
      </div>

      <button className='bg-none text-red-900'> </button>
      <h1 className='text-center font-bold text-2xl'>Counter number: {id}</h1>
      <div className='text-4xl text-center mt-[10px]'>{value}</div>
      {buttons ? (
        <>
          <button
            onClick={() => dispatch(decrementValue(id))}
            className='text-3xl w-[120px] bg-violet-600 mt-[30px] text-white rounded-md'
          >
            -
          </button>
          <button
            onClick={() => dispatch(incrementValue(id))}
            className='text-3xl w-[120px] bg-violet-600 mt-[30px] ml-[5px] text-white rounded-md'
          >
            +
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default CounterItem
