import React from 'react'
import fs from 'fs';

const ServerComponentTwo = () => {
    fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
    
  return (
    <div>
      Server component two
    </div>
  )
}

export default ServerComponentTwo
