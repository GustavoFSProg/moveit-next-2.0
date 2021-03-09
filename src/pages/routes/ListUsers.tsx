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
          <li>{list.name}</li>
          <li>{list.email}</li>
        </ul>
      ))}
    </div>
  )
}

export default ListUsers
