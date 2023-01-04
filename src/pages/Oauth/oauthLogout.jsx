import { GoogleLogout } from 'react-google-login'

const clientId = '1070594591121-q552jhgvbmjpqhduvglc542p3ojumftn.apps.googleusercontent.com'

function OauthLogout() {

    const onSucces = () => {
        console.log("Logout Succes")
    }


    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="logout"
                onLogoutSuccess={onSucces}
            />

        </div>
    )
}

export default OauthLogout