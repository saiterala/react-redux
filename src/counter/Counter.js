import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'
import styles from './Counter.module.css'

export const  Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2');

    return(
        <React.Fragment>
            <div>
                <button
                    className={styles.button}
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                Decrement
                </button>
            </div>
            <div>
                <input 
                    className={styles.textbox}
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                 />
                 <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                 >
                     Add amount
                 </button>
            </div>
        </React.Fragment>
    )
}