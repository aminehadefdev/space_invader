import { useSelector } from 'react-redux'
import Canon from './Canon/Canon'

import useEventsKey from '../hooks/Canon/useEventsKey'
import useDirection from '../hooks/Canon/useDirection'

import "./App.css"

function App() {
  const store = useSelector(state => state.App)
  useEventsKey()
  useDirection()

  const style = {
    width: store.Area.width,
    height: store.Area.height
  }
  return (
    <div style={style} className="App">
      <Canon />
    </div>
  );
}

export default App
