import React from 'react'
import { zsh } from '../../utils/zsh'
import { handleTabCompletion } from '../../utils/tabCompletion'
import { Ps1 } from '../ps1'

export const Input = ({
  inputRef,
  containerRef,
  command,
  history,
  setCommand,
  setHistory,
  clearHistory,
}) => {
  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault()

      setCommand('')

      setHistory('')
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault()

      clearHistory()
    }

    if (event.key === 'Tab') {
      event.preventDefault()

      handleTabCompletion(command, setCommand)
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault()

      await zsh(history, command, setHistory, clearHistory, setCommand)

      containerRef.current.scrollTo(0, containerRef.current.scrollHeight)
    }
  }

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value)
  }

  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className="bg-light-background dark:bg-dark-background focus:outline-none flex-grow"
        value={command}
        onChange={onChange}
        autoFocus={true}
        onBlur={({ target }) => target.focus()}
        onKeyDown={onSubmit}
      />  
    </div>
  )
}

export default Input
