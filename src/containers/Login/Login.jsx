import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { login } from '../../services/user.service';
import SocialLogin from './SocialLogin';
import { useForm } from '../../states/useForm';
import { userActions as user } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const currentUser = useSelector((state) => state.user.profile);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [values, handleChage] = useForm({ email: '', password: '' });
    if (currentUser.fullName === '') {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={values.email}
                            onChange={handleChage}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChage}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(event) => {
                                event.preventDefault();
                                login(values).then(res => {
                                    console.log(res);
                                    dispatch(user.login(res));
                                    history.push('/');
                                }).catch(err => {
                                    console.error(err);
                                })
                            }}
                        >
                            Sign In
                        </Button>
                        <Typography component="h5" variant="h5" align="center">
                            Or Login with
                        </Typography>
                        <br />
                        <SocialLogin />
                        <br />
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    } else {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(event) => {
                            event.preventDefault();
                            dispatch(user.logout({}));
                        }}>
                        Logout
                    </Button>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ?? '}
            <Link color="inherit" href="https://localhost:3000/">
                Surveyor
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        //   width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));