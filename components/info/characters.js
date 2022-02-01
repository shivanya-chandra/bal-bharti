import React from "react";
import characters from "../../public/data/characters.json";

export const Characters = () => {
	return (
		<div className="characters__main">
			<div className="characters__main-heading">
				<h1>Meet the Main Characters</h1>
			</div>
			<div className="characters__container">
				{characters.map((charac) => {
					const { name, img } = charac;
					return (
						<>
							<div className="character__card">
								<div className="img">
									<img src={img} alt="" />
								</div>
								<div className="name">{name}</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};
