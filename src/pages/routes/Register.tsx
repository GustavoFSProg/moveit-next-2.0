import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import api from '../../services/api'
// import './style.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage]: any = useState([])

  // const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('name', name)
      data.append('email', email)
      data.append('password', password)
      data.append('image', image)

      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')

      // return history.push('/')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="janela">
        <div className="profile-container">
          <fieldset>
            <legend>Cadastrar Usuario</legend>
            <br />
            <br />
            <div className="input-block">
              <label htmlFor="name">Nome: </label>
              <br />
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <br />
            <div className="input-block">
              <label htmlFor="name">Email: </label>
              <br />
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <br />

            <div className="input-block">
              <label htmlFor="name">Password</label>
              <br />
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <br />
            <br />

            <div className="input-block">
              <label>Imagem:</label>
              <br />
              <br />
              <input
                type="file"
                id="image"
                className="botao-imagem"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <br />
            <br />
            <div className="input-block">
              <button className="confirm-button" type="submit">
                Cadastrar
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}
