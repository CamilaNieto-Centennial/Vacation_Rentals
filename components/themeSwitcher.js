import React from 'react';
import { Switch, useMantineTheme, ActionIcon, createStyles, UnstyledButton, Text, Center, useMantineColorScheme, Group, rem, } from '@mantine/core';
import { upperFirst, useMediaQuery } from '@mantine/hooks';
import { IconMoon, IconSun, IconMoonStars } from '@tabler/icons-react';

export const ThemeSwitcher = (props) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position={props.justify} className={props.style}>
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
            </ActionIcon>
        </Group>
    );
}