import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/'
import { Controlled } from 'react-codemirror2'
function Editor(props) {
  const { language, name, value, onChange } = props
  function handleChange(editor, data, value) {
    onChange(value)
  }
  const [open, close] = useState(true)
  return (
    <div className={`editor-container`}>
      <div className='editor-title'>
        {name}
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${name}`} onClick={() => close(prev => !prev)}><i class="fa-solid fa-minimize"></i></button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className='code-wrapper'
        options={
          {
            lineWrapping: true,
            lint: true,
            lineSeparator: true,
            mode: language,
            lineNumbers: true,
            theme: "material"
          }
        }
      />
      <div class="modal fade" id={`${name}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">{name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='modal-body'
                options={
                  {
                    lineWrapping: true,
                    lint: true,
                    lineSeparator: true,
                    mode: language,
                    theme: "material"
                  }
                }
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
