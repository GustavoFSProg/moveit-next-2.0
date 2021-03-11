import React, { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../services/api'
import styles from '../../styles/pages/Register.module.css'
import Header from '../../components/Header'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage]: any = useState([])

  const history = useRouter()

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

      return history.push('/routes/ListUsers')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <div style={{ marginTop: '50px' }}>
        <form onSubmit={handleSubmit} className={styles.janela}>
          <div className={styles.profile_container}>
            <div style={{ border: '1px solid  #d3e2e5' }}>
              <legend>
                <p className={styles.legenda}>Cadastrar Usuario</p>
              </legend>
              <br />
              <br />
              <div className={styles.inputBlock}>
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
              <div className={styles.inputBlock}>
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

              <div className={styles.inputBlock}>
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

              <div className={styles.inputBlock}>
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
              <div className={styles.inputBlock}>
                <button className="confirm-button" type="submit">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
