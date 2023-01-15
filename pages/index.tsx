import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

// store the amount of times new is clicked
// function for knowing the state/number 'new' is clicked and rendering the button with route

const Home: NextPage = () => {
	const [noClicks, setNoClicks] = useState(0);

	const updateClicks = () => {
		// store the last click
		setNoClicks(noClicks + 1);
		console.log(noClicks);
		//clicks more than 4 redirect the user to home page
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Music App</title>
				<meta name="description" content="Music App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Link href="/test">TEST</Link>
				<Button colorScheme='red' onClick={updateClicks}>
					New
				</Button>
				{noClicks}
				{noClicks === 0 && <Button colorScheme='green'>one</Button>}
				{noClicks === 1 && <Button colorScheme='green'>two</Button>}
				{noClicks === 2 && <Button colorScheme='green'>three</Button>}
				{noClicks === 3 && <Button colorScheme='green'>four</Button>}
				<div>
					<h1>TO DO</h1>
					<s>create new button</s>
					<p>show buttons for new pages and program routes</p>
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
						ensure the data on each page is preserved - think about refreshes
					</p>
				</div>
			</main>
		</div>
	);
};

export default Home;
