import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

const ValidationGoogle = () => {

    const navigate = useNavigate();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id')
    const token = new URLSearchParams(search).get('token')
    const userid = new URLSearchParams(search).get('client_id')

    localStorage.setItem('userToken', token)
    localStorage.setItem('idclient', userid)
    localStorage.setItem('id', id)

  const getAllCity = async () => {
    apiRequest(`city`, `GET`, null)
      .then(res => {
        localStorage.setItem('city', JSON.stringify(res.data))
      })
      .catch(err => console.log(err))
  }

    useEffect(() => {
        getAllCity()
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, []);

  return (
    <Loading/>
  )
}

export default ValidationGoogle