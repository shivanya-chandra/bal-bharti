import React from "react";

export const Nav = () => {
	return (
		<div className="nav__main">
			<div className="nav__main-contents">
				<span className="content">
					{" "}
					<a href="/">Home</a>
				</span>
				<span className="content">
					{" "}
					<a href="/info">Info</a>
				</span>
				<span className="content">
					{" "}
					<a href="/ai">AI</a>{" "}
				</span>
			</div>
		</div>
	);
};
