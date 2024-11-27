import Form from './components/Form';
import Table from './components/Table'
import Stats from './store/Stats';

export default function App() {

  return (
    <div className='row g-6 p-4'>
      <div className='col-6'>
        <Stats />
      </div>
      <div className='col-6'>
        <Table />
      </div>
      <div className='col-6'>
        <Form />
      </div>

    </div>
  )
}