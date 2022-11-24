import React, { createContext, useContext } from 'react'

const CardContext = createContext(null)

const useCardContext = () => {
  const context = useContext(CardContext)
  if (!context) {
    // Error message should be more descriptive
    throw new Error('No context found for Card')
  }
  return context
}

const Card = ({ children, className = undefined }) => {
  const value = {}
  const cls = ['card', className].filter(Boolean).join(' ')
  return (
    <CardContext.Provider value={value}>
      <div className={cls}>{children}</div>
    </CardContext.Provider>
  )
}

const Body = ({ children }) => {
  useCardContext()
  return <div className="card-body">{children}</div>
}

const Header = ({ children }) => {
  useCardContext()
  return <div className="card-header">{children}</div>
}

const Footer = ({ children }) => {
  useCardContext()
  return <div className="card-footer text-muted">{children}</div>
}

export default Card
export { Body, Header, Footer }
