import { GoogleLogin } from 'react-google-login'

const clientId = '1070594591121-q552jhgvbmjpqhduvglc542p3ojumftn.apps.googleusercontent.com'

function OauthLogin() {

    const onSucces = (res) => {
        console.log("Login Succes", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Login Failed", res)
    }

    return (
        <div id="singInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="login"
            onSucces={onSucces}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            inSingedIn={true}
            />
        </div>
    )
}

export default OauthLogin