import React from 'react';
import {Button, Card, CardContent, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {useForm} from '@fuse/hooks';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function ForgotPassword()
{
    const classes = useStyles();
    const {form, handleChange, resetForm} = useForm({
        email: ''
    });

    function isFormValid()
    {
        return form.email.length > 0;
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        resetForm();
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0")}>

            <div className="flex flex-col items-center justify-center w-full ">


            <FuseAnimate animation={{translateX: [0, '100%']}}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                        <form
                            name="recoverForm"
                            noValidate
                            className="flex flex-col justify-center w-full"
                            onSubmit={handleSubmit}
                        >

                            <TextField
                                className="mb-16"
                                label="Votre e-mail"
                                autoFocus
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                className="w-224 mx-auto mt-16"
                                aria-label="Reset"
                                disabled={!isFormValid()}
                                type="submit"
                            >
                                Envoyez e-mail de réinitialisation
                            </Button>

                        </form>

                        <div className="flex flex-col items-center justify-center pt-32 pb-24">
                            Vous souhaitez faire autre chose ? 
                            <Link className="font-medium" to="/register">M'inscrire</Link> ou 
                            <Link className="font-medium" to="/login">Connexion</Link>
                        </div>

                    </CardContent>
                </Card>
            </FuseAnimate>
            </div>
        </div>
    );
}

export default ForgotPassword;
