import React from 'react';
import { Button } from 'react-bootstrap';
import CounterThree from './CounterThree';
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from './feature/counter/counterSlice';

const Counter = () => {
    const counter=useSelector((state)=>state.counter.value)
 const dispatch=useDispatch()

 const handelAddition=()=>{
    dispatch(incrementByAmount(8))
 }
    return (
        <div>
            <Button onClick={handelAddition} className='mx-2' variant="primary">8+</Button>
           <CounterThree></CounterThree>
        </div>

    );
};

export default Counter;