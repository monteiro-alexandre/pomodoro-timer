import React from 'react';
import {
  FaLaptop,
  FaHeadphones,
  FaCoffee,
  FaPlay,
  FaStop,
  FaRedo,
} from 'react-icons/fa';

import Head from 'next/head';

import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Input,
} from '@chakra-ui/react';

import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pomodoro Timer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout>
        <Flex
          flexDir="column"
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            marginTop="30px"
          >
            <Button
              leftIcon={<FaLaptop />}
              variant="ghost"
              color="blue.500"
              _hover={{ color: 'blue.500' }}
            >
              Pomodoro
            </Button>
            <Button
              leftIcon={<FaHeadphones />}
              variant="ghost"
              _hover={{ color: 'green.500' }}
            >
              Short Break
            </Button>
            <Button
              leftIcon={<FaCoffee />}
              variant="ghost"
              _hover={{ color: 'yellow.500' }}
            >
              Long Break
            </Button>
          </Flex>
          <Flex width="80%" flexWrap="wrap">
            <Flex
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '50%']}
            >
              <CircularProgress
                max={25}
                value={25}
                size="300px"
                color="blue.500"
                thickness="2px"
              >
                <CircularProgressLabel>25:00</CircularProgressLabel>
              </CircularProgress>
            </Flex>

            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              width={['100%', '100%', '50%']}
            >
              <Input
                variant="outline"
                placeholder="Digite uma Tarefa"
                maxWidth="450px"
              />

              <Flex
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                marginTop="30px"
              >
                <Button leftIcon={<FaPlay />} variant="ghost" color="blue.500">
                  Start
                </Button>
                <Button leftIcon={<FaStop />} variant="ghost" color="red.500">
                  Stop
                </Button>
                <Button
                  leftIcon={<FaRedo />}
                  variant="ghost"
                  color="yellow.500"
                >
                  Reset
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
