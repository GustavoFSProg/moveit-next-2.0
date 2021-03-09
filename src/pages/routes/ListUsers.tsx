import React, { useEffect, useState } from 'react'
import api from '../../services/api'

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
      {lista.map((list) => (
        <ul key={list.id}>
          <img
            src={`https://api-moveit.herokuapp.com/files/${list.image}`}
            alt="foto"
            style={{ width: '20%' }}
          />
          <br />
          <br />

          <li>{list.name}</li>
          <li>{list.email}</li>
          <br />
          <br />
          <br />
        </ul>
      ))}
    </div>
  )
}

export default ListUsers
