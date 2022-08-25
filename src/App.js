import React from 'react';
import './App.css';
import RandomCard from "./RandomCard"
import CardSearchForm from "./CardSearchForm"
import NewDeckForm from "./NewDeckForm"
import ListOfDecks from './ListOfDecks';
import Menu from "./Menu"
import {
	Routes,
	Route,
	Link,
	Switch
} from "react-router-dom"

function App() {
	return (
		<div>
			<Menu />
			<Switch>
				<Route path="/random">
					<RandomCard />
				</Route>
				<Route path="/search">
					<CardSearchForm />
				</Route>
				<Route path="/">
					<NewDeckForm />
					<ListOfDecks />
				</Route>
			</Switch>
		</div>
	)
		
}

export default App;
