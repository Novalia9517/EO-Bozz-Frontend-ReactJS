import React from 'react'
import OauthLogout from './oauthLogout'
import OauthLogin from './oauthLogin'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

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
        <OauthLogin/>
        <OauthLogout/>
    </div>
  )
}

export default Oauth