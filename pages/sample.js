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
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    full_container: {
        //height: `calc(100vh - 60px)`,
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        width: '100%',
        height: `calc(90vh)`,
        position: 'relative',
    },
    container: {
        height: '100%'
    },
    video: {
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
    },
}));

export function Data() {
    const { classes } = useStyles();
    return (
        <>

            <div className={classes.full_container}>
                <video autoPlay loop muted playsInline className={classes.video} ta="center">
                    <source src={"https://st3v.idealista.pt/cb/fe/fb/hd_226992516.mp4"} type="video/mp4" />
                </video>

                {/* Your other content can go here */}
            </div>

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
