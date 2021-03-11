import React from 'react'
import style from '../styles/pages/Header.module.css'
import Link from 'next/link'

function Header() {
  return (
    <div className={style.profileContainer}>
      <div>
        <Link href="/routes/Register">Cadastro</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>

      <div>
        <Link href="/routes/ListUsers">Usuarios</Link>
      </div>
      <p></p>
    </div>
  )
}
export default Header
