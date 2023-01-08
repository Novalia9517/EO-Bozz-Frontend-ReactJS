import React from 'react'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'


const clientId = '1070594591121-q552jhgvbmjpqhduvglc542p3ojumftn.apps.googleusercontent.com'

const Oauth = () => {

    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      }
      gapi.load('client:auth2', start)
    }, [])
    

  return (
      <button className='btn btn-ghost my-2 w-full border border-bozz-one text-gray-700 text-xs'>
        <a target={'_self'} href='https://irisminty.my.id/login/oauth/google' className='flex'>
          <FcGoogle className='text-lg mr-3'/> Login with Google
        </a>
      </button>
  )
}

export default Oauth