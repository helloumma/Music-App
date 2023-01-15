import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "@chakra-ui/react";

// key press of anything other than a-g should be dealt with

const Home: NextPage = () => {
	const [noClicks, setNoClicks] = useState(0);
	const [keyPress, setKeyPress] = useState(+new Date());
	const [keyRelease, setKeyRelease] = useState();

	const router = useRouter();

	let date;

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
		const diff = +new Date() - keyPress;
		console.log(diff);
		setKeyRelease(diff / 1000);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Music App</title>
				<meta name="description" content="Music App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Button colorScheme='red' onClick={updateClicks}>
					New
				</Button>
				{noClicks === 0 && (
					<Link href="/">
						<Button colorScheme='green'>one</Button>
					</Link>
				)}
				{noClicks === 1 && (
					<Link href="/page-two">
						<Button colorScheme='green'>two</Button>
					</Link>
				)}
				{noClicks === 2 && (
					<Link href="/page-three">
						<Button colorScheme='green'>three</Button>
					</Link>
				)}
				{noClicks === 3 && (
					<Link href="/page-four">
						<Button colorScheme='green'>four</Button>
					</Link>
				)}
				<div>
					<h1>TO DO</h1>
					<p>show buttons for each page on new button click</p>
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
					<Input type="text" onKeyDown={onKeyDown} onKeyUp={onKeUp} />
					{keyRelease}
				</div>
			</main>
		</div>
	);
};

export default Home;
