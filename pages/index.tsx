import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "@chakra-ui/react";
import { DummyData } from "../types";
import { Flex, Spacer } from "@chakra-ui/react";
// key press of anything other than a-g should be dealt with

// need a useRef to store the amount of pages

// reminder: add interfaces/ types to components

type Props = {
  data: DummyData;
};

const Home: NextPage<Props> = (Props) => {
  const [noClicks, setNoClicks] = useState(0);
  const [keyPress, setKeyPress] = useState(+new Date());
  const [keyRelease, setKeyRelease] = useState();
  const [count, setCount] = useState(0);

  const router = useRouter();

  let date: number;

  const updateClicks = () => {
    // store the last click to preserve the button rendered
    setNoClicks(noClicks + 1);
    if (noClicks > 4) {
      router.push("/");
      setNoClicks(0);
    }
  };

  const onKeUp = (e: React.KeyboardEvent) => {
    console.log("key pressed date/time");
    date = +new Date();
    setKeyPress(date);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    console.log("key released date/time");
    const diff: number = +new Date() - keyPress;
    console.log(diff);
    setKeyRelease(diff / 1000);
  };

  const dummyData: { id: number; name: string }[] = [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test 2",
    },
  ];

  console.log(Props);

  const handleClick = () => {
    setCount(count + 1);
  };

  const buttons = Array(count)
    .fill()
    .map((_, i) => (
      <Link key={count} href={`/${i}`}>
        <Button colorScheme="green">Button {i + 1}</Button>
      </Link>
    ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*<Button colorScheme="red" onClick={updateClicks}>
          New
        </Button>
        {dummyData.map((a: { id: number; name: string }) => (
          <Link key={a.id} href={`/${a.id}`}>
            {a.name}
          </Link>
				))}*/}

        <Button colorScheme="red" onClick={handleClick}>
          New
        </Button>
        <Flex key={count} direction={"row"} justifyContent="center">
          {buttons}
        </Flex>

        {/* map over the number of clicks and create a button for each  */}

        <div>
          <h1>TO DO</h1>
          <p>
            program the functionality of key press (for now show text and it can
            be changed to an icon/notation after)
          </p>
          {/*Store the Date when the key is pressed. Store the Date when the key is released. Subtract the dates. */}
          <p>
            program the functionality of upper and lower case (and remember
            steps between things like e/f etc etc)
          </p>
          <p>
            quick fix: show the button click, figure out if it's upper or lower
            case? and then add a flat or sharp
          </p>
          {/* the input needs to be a component that can be used in all pages */}
          {/* deal with the upper and lower case letters */}
          {/* deal with only a-g */}
          {/* program functionality of mapying the time to a type of note */}
          {/* show the note either normal, flat, sharp and the type of note */}
          <Input type="text" onKeyDown={onKeyDown} onKeyUp={onKeUp} />
          {keyRelease}
        </div>
      </main>
    </div>
  );
};

export default Home;
/* {noClicks === 0 && (
          <Link href="/">
            <Button colorScheme="green">one</Button>
          </Link>
        )}
        {noClicks === 1 && (
          <Link href="/page-two">
            <Button colorScheme="green">two</Button>
          </Link>
        )}
        {noClicks === 2 && (
          <Link href="/page-three">
            <Button colorScheme="green">three</Button>
          </Link>
        )}
        {noClicks === 3 && (
          <Link href="/page-four">
            <Button colorScheme="green">four</Button>
          </Link>
        )}
 */
