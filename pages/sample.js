import Head from 'next/head';
import '../styles/page.module.css'
import Layout, { siteTitle } from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React, { useState } from 'react';
import Footer from '../components/footer';

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
        height: `calc(100vh - 60px)`,
        position: 'relative',
    },
    container: {
        height: '100%'
    }
}));

export function Data() {
    const { classes } = useStyles();
    return (
        <>
        
            <Title>Hey!</Title>

            {/*FOOTER*/}
            < Footer />
        </>
    );
}



/* Set the Global User Context to Data Component */
export default function DataWithContext() {
    return (
        <>
            <NavBar />
            <UserProvider>
                <Data />
            </UserProvider>
        </>
    )
}
