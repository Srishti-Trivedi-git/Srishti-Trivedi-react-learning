import { useState } from 'react'
function App() {
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const length = 12
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      newPassword += charset[randomIndex]
    }
    setPassword(newPassword)
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div>
          <h2>Your Generated Password:</h2>
          <p>{password}</p>
        </div>
      )}
    </div>
  )
}

export default App
