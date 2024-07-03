import ClientComponentOne from '@/components/client-component-one'
import ServerComponentOne from '@/components/server-component-one'
import React from 'react'

const Intervleaving = () => {
  return (
    <div>
      <h1>Interleaving</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  )
}

export default Intervleaving
