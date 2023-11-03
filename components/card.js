import { Card, Image, Text, Badge, Button, Group, Center, Flex } from '@mantine/core';

import { IconStarFilled } from '@tabler/icons-react';
import { useRouter } from 'next/router';

export default function MainCard(props) {
  const router = useRouter();

  const redirectToDataPage = () => {
    router.push('/sample');
  };
  return (
    <Center>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={props.img}
            height={160}
            alt={props.title}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{props.title}</Text>
          <Center c="blue.9">
            <IconStarFilled size="1rem" stroke={1.5} />
            <Text fw={700} fz="sm" c="blue.9" ml={4}>
              {props.tag}
            </Text>
          </Center>
        </Group>

        <Text size="sm" fw={700} color="dimmed">
          {props.description}
        </Text>

        <Button variant="gradient" gradient={{ from: '#2B6CB0', to: '#1A365D' }} fullWidth mt="md" radius="md" onClick={redirectToDataPage}>
          {props.btn}
        </Button>
      </Card>
    </Center>
  );
}