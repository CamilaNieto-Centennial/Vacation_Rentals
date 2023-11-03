import Head from 'next/head';
//import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
    Title,
    Text,
    Anchor,
    rem,
    createStyles,
    Paper,
    Button,
    MantineProvider,
    Container,
    TextInput,
    PasswordInput,
    Checkbox,
    useMantineTheme,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
    full_container: {
        height: `calc(100vh - 40px)`,
        position: 'relative',
    },

    form_container: {
        width: '50%',
        height: '100%',
        float: 'left',
        position: 'relative',
        marginTop: '0em',
        [theme.fn.smallerThan('sm')]: {
            width: '100%',
            marginBottom: '2em',
        },
    },

    image_container: {
        width: '50%',
        height: '100%',
        float: 'left',
        background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/form.jpg") center/cover no-repeat',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan('sm')]: {
            marginBottom: '14px',
            marginTop: '14px',
        },
    },
}));


export function CreateAccount() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const router = useRouter();

    const redirectToDataPage = () => {
        router.push('/');
    };

    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.full_container}>
                <Paper className={classes.form_container} radius={0} p={30}>
                    <Title order={2} className={classes.title} ta="center" mt="md" mb={25}>
                        Welcome to Mantine!
                    </Title>

                    <TextInput label="Name" placeholder="Your name" size="md" />
                    <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" />
                    <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                    {/*<Checkbox label="Keep me logged in" mt="xl" size="md" />*/}
                    <Button fullWidth mt="xl" size="md" onClick={redirectToDataPage} >
                        Sign Up
                    </Button>

                    <Text ta="center" mt="md">
                        Have an account?{' '}
                        <Anchor href="/login" weight={700}>
                            Login
                        </Anchor>
                    </Text>
                </Paper>
                <div className={classes.image_container}></div>
            </div>
        </Layout>
    );
}

/* Set the Global User Context to CreateAccount Component */
export default function CreateAccountWithContext() {
    return (
        <UserProvider>
            <NavBar />
            <CreateAccount />
        </UserProvider>
    )
}
