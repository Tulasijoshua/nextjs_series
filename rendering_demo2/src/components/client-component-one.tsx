"use client";
import React, { useState } from 'react'

const ClientComponentOne = ({children}: { children: React.ReactNode }) => {
    const [name, setName] = useState("Batman");
  return (
    <div>
      <h1>Client component one</h1>
      {children}
    </div>
  )
}

export default ClientComponentOne
