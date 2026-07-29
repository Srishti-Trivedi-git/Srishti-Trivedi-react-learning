import {useState} from 'react'
function App() {
const [background, setBackground] = useState('olive')

return (
  <div className={`bg-${background}-500 min-h-screen flex items-center justify-center`}>
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Background Changer</h1>
      <p className="mb-4">Current background color: {background}</p>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setBackground('blue')}
        >
          Blue
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setBackground('red')}
        >
          Red
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setBackground('green')}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => setBackground('yellow')}
        >
          Yellow
        </button>
      </div>
    </div>
  </div>
)
}
export default App;