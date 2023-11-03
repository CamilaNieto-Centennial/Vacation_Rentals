/* Global styles fixed with this strategy */
import '../styles/globals.css'
import React, { useState } from 'react';

import {
    MantineProvider,
    ColorSchemeProvider,
    Container,
} from '@mantine/core';

export default function MyApp({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useState('light');
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const containerStyles = {
        backgroundColor: colorScheme === 'dark' ? '#1F2937' : undefined,
        color: colorScheme === 'dark' ? '#F9FAFB' : undefined,
    };

    // Define the custom theme
    const theme = {
        fontFamily: 'Open Sans, sans-serif',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
        components: {
            Button: {
                styles: {
                    root: { fontSize: 18 },
                },
            },
        },
        colors: {
            brand: ['#EBF8FF', '#BEE3F8', '#90CDF4', '#63B3ED', '#4299E1', '#3182CE', '#2B6CB0', '#2C5282', '#2A4365', '#1A365D'],
        },
        primaryColor: 'brand',
        colorScheme,
    }

    return (
        <MantineProvider theme={theme} >
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <Container fluid p={0} h={"100%"} style={containerStyles}>
                    <Component {...pageProps} />
                </Container>
            </ColorSchemeProvider>
        </MantineProvider>
    );
}
