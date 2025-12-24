import './App.css'
import React from 'react'
import Card from "./components/Card"
/* eslint-disable @next/next/no-img-element */
function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <Card name="meghana"/>
      <Card name="rashmi"/>
      <Card name="pavitra"/>
    </div>
  )
}

export default App
