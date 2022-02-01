import React from "react";
import { About } from "./about";
import { Features } from "./features";
import { Gallery } from "./gallery";
import { Nav } from "./nav";

export const Landing = () => {
	return (
		<>
			<div className="home__main">
				<Nav />
				<div className="home__sub-main">
					<div className="home__main-heading">
						<h1>DETROIT</h1>
					</div>
					<div className="home__main-subtext">
						<h2>becomes human</h2>
					</div>
					<div className="home__main-btns">
						<div className="filled btn">
							{" "}
							<a href="/info">Buy</a>{" "}
						</div>
						<div className="unfilled btn">
							{" "}
							<a href="/info">Learn more</a>{" "}
						</div>
					</div>
				</div>
			</div>
			<About />
			<Features />
			<Gallery />
		</>
	);
};
