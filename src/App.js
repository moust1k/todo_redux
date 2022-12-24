import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LowImportanceContainer from './components/pages/lowImportance/LowImportanceContainer'
import MiddleImportanceContainer from '../src/components/pages/middleImportance/MiddleImportanceContainer'
import HighImportanceContainer from './components/pages/highImportance/HighImportanceContainer'
import FormContainer from './components/form/FormContainer'
import Modal from './components/modal/Modal';
import ModalFormContainer from './components/form/modalForm/ModalFormContainer';

function App() {
  const [active, setActive] = useState(false)


  return (
    <Router>
      <div className="App">
        <FormContainer active={active} setActive={setActive} />
        {active &&
          <Modal active={active} setActive={setActive} >
            <ModalFormContainer setActive={setActive} />
          </Modal>}
        <Routes>
          <Route path='/' element={<LowImportanceContainer setActive={setActive} />} />
          <Route path='/low' element={<LowImportanceContainer setActive={setActive} />} />
          <Route path='/middle' element={<MiddleImportanceContainer setActive={setActive} />} />
          <Route path='/high' element={<HighImportanceContainer setActive={setActive} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
