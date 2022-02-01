import React from "react";
import data from "../public/data/data.json";

export const Features = () => {
	return (
		<div className="features__main">
			<div className="features__main-heading">
				<h1>Features</h1>
			</div>
			<div className="features__main-container">
				{data.map((d) => {
					const { logo, name, content } = d;
					return (
						<>
							<div className="features__main-cards">
								{/* <img src={logo} alt="" /> */}
								<h3>{name}</h3>
								<p>{content}</p>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};
