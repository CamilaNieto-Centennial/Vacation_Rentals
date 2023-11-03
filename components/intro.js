import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Image,
} from '@mantine/core';


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },


    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

}));

export default function FeaturesCards() {
    const { classes, theme } = useStyles();

    return (
        <Container size="lg" py="xl" mt="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    Best vacation rental
                </Badge>
            </Group>

            <Title order={3} className={`${classes.title}`} ta="center" mt="sm">
                Discover Unforgettable Vacation Rentals
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Create cherished memories with your loved ones by choosing the perfect place for your getaway. Our luxurious properties, strategically located in the best areas of Miami. 
            </Text>
        </Container>
    );
}