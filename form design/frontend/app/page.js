import React from 'react'
import Link from 'next/link'

const home = () => {
  return (
    <div className="flex-auto justify-center text-center">
      <button><Link href="/form">Clich here to fill the form</Link></button>
    </div>
  )
}

export default home