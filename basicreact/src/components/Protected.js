import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const { component } = props
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/login')

    }
  })
  return (
    <div>
      <component />
    </div>
  )
}

export default Protected;
