import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { UserContext, UserProvider } from '../components/userContext';
import NavBar from '../components/navbar';
import React, { useState } from 'react';
import Footer from '../components/footer';
import backgroundVideo from '../public/miami.mp4';

import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    overflow: 'hidden', // Hide overflowing content inside the hero
  },

  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: 0,
  },

  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.50) 60%)',
    opacity: 1,
    zIndex: 1,
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 7)`,
    paddingLeft: rem(80),
    zIndex: 2,
    position: 'relative', // Make sure the content is positioned relative to the hero
    //background: 'transparent',

    [theme.fn.smallerThan('sm')]: {
      paddingLeft: rem(10),
      paddingRight: rem(10),
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function Home() {
  const { classes } = useStyles();

  return (
    <>
      {/* HERO */}
      <div className={classes.hero}>
        <video autoPlay muted loop playsInline className={classes.video}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={classes.gradientOverlay} /> {/* Gradient overlay */}
        <div className={classes.container}>
          <Title className={classes.title}>Where Every Connection Tells a Story</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button variant="gradient" gradient={{ from: '#2B6CB0', to: '#1A365D' }} size="lg" radius="lg" className={classes.control}>
            Get started
          </Button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* Set the Global User Context to Home Component */
export default function HomeWithContext() {
  return (
    <>
      <NavBar />
      <UserProvider>
        <Home />
      </UserProvider>
    </>
  );
}
