import React from 'react';
import { useState } from 'react';

import { createStyles, Title, Text, Image, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    roundImg: {
        borderRadius: "50%",
        outlineOffset: "5px",
        marginBottom: ".8em",
    },
    redCircle: {
        outline: `3px solid ${theme.colors.red[7]}`,
        boxShadow: `4px 4px 20px 6px ${theme.colors.red[4]}28`,
        animation: "rotate-center 0.6s ease-in-out both",
    },
    blackCircle: {
        outline: `3px solid ${theme.colors.gray[6]}`,
        boxShadow: `4px 4px 20px 6px ${theme.colors.gray[4]}28`,
    },
    redText: {
        color: theme.colors.red[7],
    },
    blackText: {
        color: theme.colors.gray[6],
    },

}));

export default function menuItem(props) {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    function handleBlur() {
        setActive(false);
    };

    const circleClassName = active ? classes.redCircle : classes.blackCircle;
    const textClassName = active
        ? theme.colorScheme === 'dark'
            ? classes.redText
            : classes.redText // Apply redText class for both dark and light themes
        : classes.blackText;


    return (
        <div onClick={handleClick} onBlur={handleBlur} tabIndex={0}>
            <img className={`${classes.roundImg} ${circleClassName}`} radius="md" href="/" width={240} src={props.img} alt={props.title} />
            <Title className={textClassName} span order={4} ta="center">{props.title} <Text span inherit component="a" href="https://mantine.dev/core/"> &gt;</Text></Title>
        </div>
    )
}
