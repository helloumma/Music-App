import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { DataContainer } from "../types";
import { Flex } from "@chakra-ui/react";

type dropDown = {
  value: string;
};

const Home: NextPage = () => {
  const [keyPress, setKeyPress] = useState<number>(+new Date());
  const [keyRelease, setKeyRelease] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [inputSelect, setInputSelect] = useState<boolean>(false);
  const [buttonSelect, setButtonSelect] = useState<boolean>(false);
  const [value, setNewVal] = useState();

  let date: number;

  const handleClick = () => {
    setCount(count + 1);
  };

  // TO DO: you need to use types/interface here
  const buttons = Array(count)
    .fill(count)
    .map((_: number, i: number) => (
      <Link key={i} href={`/${i}`}>
        <Button key={i} colorScheme="green">
          Button {i + 1}
        </Button>
      </Link>
    ));

  // TO DO: Types/interface
  const inputClick = () => {
    //e.preventdefault()
    setInputSelect(true);
    setButtonSelect(false);
  };

  // TO DO: Types/interface
  const buttonClick = () => {
    setInputSelect(false);
    setButtonSelect(true);
  };

  const onKeUp = (e: React.KeyboardEvent) => {
    //console.log("key pressed date/time");
    date = +new Date();
    setKeyPress(date);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    //console.log("key released date/time");
    const diff: number = +new Date() - keyPress;
    //console.log(diff);
    setKeyRelease(diff / 1000);
    //console.log(e.key);
    if (e.key.match(/[h-z]/gi)) alert("This is not a musical note.");
    // figure out how to disable/look into focus

    if (
      (keyRelease === 2.4 && value === "2/4") ||
      (keyRelease === 3.6 && value === "3/4") ||
      (keyRelease === 4.8 && value === "4/4")
    )
      alert("correct");
  };

  const handleDropDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewVal(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="app-title">music app</h1>
        <p>
          This is a small music app to gain a better understanding of time
          signatures and types of music notes.
        </p>
        <Flex direction={"row"}>
          <Button colorScheme="blue" onClick={inputClick}>
            Input Box
          </Button>
          <Button colorScheme="blue" onClick={buttonClick}>
            Buttons
          </Button>
        </Flex>
        <div className="main-instructions">
          {inputSelect || buttonSelect ? (
            <ol>
              <li>Select a time signature from the menu</li>
              {inputSelect && (
                <li>Hold down a letter between A to G into the input box</li>
              )}
              {buttonSelect && (
                <li>
                  Click and hold on buttons letter between A to G into the input
                  box
                </li>
              )}
              <li>The type of note will be shown on screen </li>
              <li>
                You may create new pages to experiment with different notes and
                signatures
              </li>
              <li>You cannot input values outside of A to G</li>
            </ol>
          ) : (
            "Make a selection above to view instructions."
          )}
        </div>

        <div className="main-section">
          <Flex direction={"row"} justifyContent={"space-between"}>
            <Button colorScheme="red" onClick={handleClick}>
              New
            </Button>
            <Menu>
              <MenuButton as={Button}>Time Signature</MenuButton>
              <MenuList>
                {["2/4", "3/4", "4/4"].map((timeSignature: string) => (
                  <MenuItem
                    onClick={handleDropDown}
                    value={timeSignature}
                    key={timeSignature}
                  >
                    {timeSignature}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          {value}
          <Flex key={count} direction={"row"} justifyContent="center">
            {buttons}
          </Flex>

          <p>
            Reminder: Only enter or press down notes for ONE bar within the time
            signature. BPM is set to 50.
          </p>
          <Flex direction={"row"} justifyContent="center">
            {inputSelect && (
              <Input type="text" onKeyDown={onKeyDown} onKeyUp={onKeUp} />
            )}
            {buttonSelect && (
              <>
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
                <Button>D</Button>
                <Button>E</Button>
                <Button>F</Button>
                <Button>G</Button>
              </>
            )}
          </Flex>
          {keyRelease}
        </div>
      </main>
    </div>
  );
};

export default Home;
