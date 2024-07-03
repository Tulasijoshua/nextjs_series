import React from 'react'
import fs from "fs";

const ServerComponentOne = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8")
  return (
    <div>
      <h1>Server component one</h1>
    </div>
  )
}

export default ServerComponentOne
