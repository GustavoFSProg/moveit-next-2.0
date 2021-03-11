import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import api from '../../services/api'
import styles from '../../styles/pages/ListUser.module.css'

function ListUsers() {
  const [lista, setLista] = useState([])

  async function getUsers() {
    const data: any = await api.get('/')

    console.log(data)

    setLista(data.data)

    return lista
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div style={{ marginTop: '50px' }}>
          <ul className={styles.card}>
            {lista.map((list) => (
              <div className={styles.contain} key={list.id}>
                <li>
                  <img
                    src={`https://api-moveit.herokuapp.com/files/${list.image}`}
                    alt="foto"
                    style={{ width: '30%' }}
                  />
                </li>
                <br />
                <br />

                <li>
                  <strong>Nome: </strong>
                  {list.name}
                </li>

                <li>
                  <strong>Email: </strong>
                  {list.email}
                </li>
                <br />
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ListUsers
