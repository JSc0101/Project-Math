import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

const Swicth = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'  />
        <Route path='/exercises'/>
        <Route path='/exercises/add'/>
      </Routes>
    </Router>
  )
}

export default Swicth;