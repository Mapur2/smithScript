import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'

function App() {
  const [html, setHtml] = useState("");
  const [css, setCSS] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrc] = useState("")

  useEffect(() => {
    const time = setTimeout(() => {
      setSrc(`<html lang="en">
<body>
  ${html}
</body>
<style>${css}</style>
<script> ${js}</script>
</html>`)
    }, 250);
    return () => clearTimeout(time)
  }, [html, css, js])

  return (
    <>
      <Header />
      <div className='pane top-pane'>
        <Editor language="xml" name="HTML" value={html} onChange={setHtml} />
        <Editor language="css" name="CSS" value={css} onChange={setCSS} />
        <Editor language="javascript" name="JS" value={js} onChange={setJs} />

      </div>
      <div className='pane'>
        <iframe title='output'
          srcDoc={srcDoc}
          sandbox='allow-scripts'
          width="100%"
          height="100%"></iframe>
      </div>
    </>
  )
}

export default App
