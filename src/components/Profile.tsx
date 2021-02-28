import React from 'react'
import imagem from './a.jpg'
import '../../imagem.d.ts'

function Profile() {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/51864014?s=400&u=431f414ca00ec298196ca8a4f948e4ccbb52b550&v=4"
        alt="foto"
        style={{ width: '25%' }}
      />

      <div>
        <strong> Gustavo Sohne</strong>
        <p> Level 1</p>
      </div>
    </div>
  )
}
export default Profile
