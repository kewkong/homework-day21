import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Form2 from './components/Form2'

function App() {

  const [theme, setTheme] = useState('light')

  // ฟังก์ชันสลับ Theme
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  // ใช้ useEffect เพื่อเซ็ต attribute 'data-theme' ให้กับ <html> ทุกครั้งที่ theme เปลี่ยน
  // css ใช้การปรับปรุงจาก css เดิมที่ติดตั้งมาใน index.css 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <div style={{ textAlign: 'right', padding: '20px' }}>
        <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {theme === 'light' ? '🌙 สลับเป็น Dark Mode' : '☀️ สลับเป็น Light Mode'}
        </button>
      </div>

      <section id="center">
        <div className='card'>
          <Form></Form>
        </div>

        <div className='card'>
          <Form2></Form2>
        </div>

      </section>
    </>
  )
}

export default App
