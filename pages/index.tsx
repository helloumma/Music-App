import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "@chakra-ui/react";
import { DummyData, DataContainer } from "../types";
import { Flex, Spacer } from "@chakra-ui/react";

// key press of anything other than a-g should be dealt with

// DO THE ABOVE TOMORROW

type Props = {
  data: DummyData;
};




/*
 const dummyData: { id: number; name: string }[] = [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test 2",
    },
  ]; */

/*
export interface DummyData {
	id: number;
	name: string;
}
 */

export type tryingData = DataContainer<[{
  id: number,
  name: string
}]>

const test:tryingData = {
  data: [{
    id: 0,
    name: "test1"
  }, ]
}

//console.log(test)
console.log(test?.data.map((a: { id: number; name: string }) => a.id +  a.name))


const Home: NextPage<Props> = (Props) => {
  const [noClicks, setNoClicks] = useState(0);
  const [keyPress, setKeyPress] = useState(+new Date());
  const [keyRelease, setKeyRelease] = useState(0);
  const [count, setCount] = useState(0);
	const [inputSelect, setInputSelect] = useState(false)
	const [buttonSelect, setButtonSelect] = useState(false)

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
    console.log(e.key);
    // if e.key is not a-g alert box
    if (e.key.match(/[h-z]/gi)) alert("This is not a musical note.");
    // figure out how to disable/look into focus
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

  //console.log(myData)

  //console.log(Props);

  const handleClick = () => {
    setCount(count + 1);
  };

  const buttons = Array(count)
    .fill(count)
    .map((_, i: number) => (
      <Link key={i} href={`/${i}`}>
        <Button key={i} colorScheme="green">
          Button {i + 1}
        </Button>
      </Link>
    ));

	const inputClick = () => {
		//e.preventdefault()
		setInputSelect(true)
		setButtonSelect(false)
	}

	const buttonClick = () => {
		setInputSelect(false)
		setButtonSelect(true)

		
	}
  return (
    <div className={styles.container}>
      <Head>
        <title>Music App</title>
        <meta name="description" content="Music App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
			<h1 className="app-title">music app</h1>
			<p>This is a small music app to gain a better understanding of time signatures and types of music notes.</p>
			
			
		<div className="main-instructions">
			{inputSelect || buttonSelect ? (<ol>
					<li>Select a time signature from the menu</li>
					{inputSelect && <li>Hold down a letter between A to G into the input box</li> }
					{buttonSelect && <li>Click and hold on buttons letter between A to G into the input box</li>}
					<li>The type of note will be shown on screen </li>
					<li>You may create new pages to experiment with different notes and signatures</li>
					<li>You cannot input values outside of A to G</li>
				</ol>) : "Make a selection below to view instructions."}
				
		</div>
		<Flex direction={"row"}>
			<Button colorScheme="blue" onClick={inputClick}>Input Box</Button>
			<Button colorScheme="blue" onClick={buttonClick}>Buttons</Button>
				</Flex>
        <div className="main-section">
          <Flex direction={"row"} justifyContent={"space-between"}>
            <Button colorScheme="red" onClick={handleClick}>
              New
            </Button>
            <Menu>
              <MenuButton as={Button}>Time Signature [TO DO]</MenuButton>
              <MenuList>
                <MenuItem>2/4</MenuItem>
                <MenuItem>3/4</MenuItem>
                <MenuItem>4/4</MenuItem>
                <MenuItem>6/8</MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <Flex key={count} direction={"row"} justifyContent="center">
            {buttons}
          </Flex>
          {/*<p>
          Add a dropdown menu to select the time signature and then program the
          timing of each note!!!! beats per min etc.
	</p>*/}

          {/*<Button colorScheme="red" onClick={updateClicks}>
          New
        </Button>
        {dummyData.map((a: { id: number; name: string }) => (
          <Link key={a.id} href={`/${a.id}`}>
            {a.name}
          </Link>
				))}*/}
      

          {/* map over the number of clicks and create a button for each  */}

          {/*Store the Date when the key is pressed. Store the Date when the key is released. Subtract the dates. */}
          <h1>CALCULATIONS FOR TIME SIGNATURES</h1>

					<p>2/4 => two crochets per semibreve</p>
					<p>3/4 => three crochet per semibreve</p>
					<p>4/4 => one crochet per semibreve</p>

          <p>
            program the functionality of upper and lower case (and remember
            steps between things like e/f etc etc)
          </p>

					<p>Potentially have an option to have buttons A to G, with a click handler of timing of click up and off</p>
					<p>Idea: Create an option/button which enables the user to select between input and button </p>
					<p>Maybe: Get the user to press down on a series of notes to make up the time signature</p>
          {/* the input needs to be a component that can be used in all pages */}
          {/* deal with the upper and lower case letters */}
          {/* program functionality of mapping the time to a type of note */}
          {/* show the note either normal, flat, sharp and the type of note */}
          <p>show and hide buttons/input here</p>
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
            {/*<Button colorScheme="blue">Submit</Button>*/}
          </Flex>

          {/*Use submit instead of entering???*/}
          {keyRelease}
          {keyRelease < 0
            ? ""
            : keyRelease <= 0.25
            ? "semi-quaver"
              ? keyRelease <= 0.5
              : "quaver"
              ? keyRelease <= 1
              : "crotchet"
              ? keyRelease <= 2
              : "minimum"
              ? keyRelease <= 4
              : "semibreve"
            : ""}
          {/*keyRelease > 0 && keyRelease <= 0.25 ? "semi-quaver" : "no"*/}
          {keyRelease >= 0.25 && "semi-quaver"}
          {keyRelease >= 0.5 && "quaver"}
          {keyRelease >= 1 && "crotchet"}
          {keyRelease >= 2 && "minimum"}
          {keyRelease >= 4 && "semibreve"}
          {/*<h1>TO DO</h1>
         <p>Show the type of note and the case</p>
          <p>
            Program upper and lower case (for step up or down) and then show the
            type of note
          </p>
          <p>
            Maybe: detect the key pressed and why the note shown (oh that's an
            upper C so it's c#)
						</p>*/}
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
