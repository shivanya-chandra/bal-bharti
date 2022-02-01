import React from "react";
import { Buy } from "../components/info/buy";
import { Characters } from "../components/info/characters";
import { News } from "../components/info/news";
import { Nav } from "../components/nav";

export default function Info() {
	return (
		<div className="info__main">
			<Nav />
			<Characters />
			<News />
			<Buy />
		</div>
	);
}
