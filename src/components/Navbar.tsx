"use client"

import React, { useState } from 'react'

const Navbar = () => {

    const [isLoggedin,setIsLoggedin] = useState(false);

  return (
    <div>
      <h1>Bits</h1>

      {
        isLoggedin ?
        <div>
            <button>My files</button>
            <button>Share</button>
            <button>Logout</button>
            </div>
        :
        <div>
            <button>Login</button>
            <button>Signup</button>
            </div>
      }
    </div>
  )
}

export default Navbar
