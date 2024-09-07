
import { Button } from 'react-bootstrap';
import Counter from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './feature/counter/counterSlice';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { userListin } from './feature/userlist/userListSlice';

function App() {

  const counter = useSelector((state) => state.counter.value)
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const handelAdd = () => {
    dispatch(increment())
  }
  const handelSub = () => {
    dispatch(decrement())
  }

  useEffect(() => {
    dispatch(userListin())
  }, [])

  return (
    <div className='my-8 mx-4'>
      <h1>{counter}</h1>
      <div className='d-flex '>
        <Button onClick={handelAdd} className='mx-2' variant="primary">+</Button>
        <Button onClick={handelSub} className='mx-2' variant="danger">-</Button>
      </div>
      <Counter />


      <div style={{ marginTop: '20px' }}>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
           {
            user.map(u=> <tr>
              <td>{u.userId}</td>
              <td>{u.title}</td>
              <td>{u?.completed}</td>
            </tr>)
           }
          </tbody>
        </Table>
      </div>


    </div>
  )
}

export default App
