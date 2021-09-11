import { Grid } from '@material-ui/core';
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function SocialLogin() {
    const responseFacebook = (response) => {
        console.log(response);
    }

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <Grid container>
            <Grid item xs>
                <FacebookLogin
                    size="1em"
                    appId="275338274143557"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="FACEBOOK"
                />
            </Grid>
            <Grid item >
                <GoogleLogin
                    size="1em"
                    clientId="879113238185-rhd89fjcgflqef4s62op67hq1e5cpr2e.apps.googleusercontent.com"
                    buttonText="GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </Grid>
        </Grid>
    )
}
