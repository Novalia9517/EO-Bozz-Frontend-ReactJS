import React from 'react'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'
import { FcGoogle } from 'react-icons/fc'


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
    <div>
      <button className='btn btn-ghost my-2'>
        <a target={'_self'} href='https://irisminty.my.id/login/oauth/google'>Google</a>
      </button>
    </div>
  )
}

export default Oauth