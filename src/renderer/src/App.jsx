import { useState } from 'react'
import { Button } from 'antd'
import vite from '@/assets/vite.svg'
import react from '@/assets/react.svg'
import electron from '@/assets/electron.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [file, setFile] = useState({
    name: "",
    content: ""
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFile({...file, [name]: value})
  }
  const createFile = () => {
    const fs = window.bridge.fs;
    fs.writeFile(file.name, file.content, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }

  const updateOS = () => {
    const spawn = window.bridge.spawn;
    spawn("konsole", ["-e", "sh", "-c", "/home/brilliant/projects/rev/test-electron/update.sh"], {shell: true})
  }
  return (
    <div className="w-screen h-screen bg-gray-200 grid place-content-center gap-4">
      <input className="p-4 border-2 border-green-400" type="text" name="name" value={file.name} onChange={handleChange} />
      <textarea className="p-4 border-2 border-green-400" name="content" id="" cols="80" rows="10" value={file.content} onChange={handleChange}></textarea>
      <button className="p-4 border-2 border-green-400 bg-green-400" onClick={createFile}>Create</button>
      <button onClick={updateOS}>UPDATE OS</button>
    </div>
  )
}

export default App
