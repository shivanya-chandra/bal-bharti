import React from "react";

export const Gallery = () => {
	return (
		<div className="gallery__main">
			<div className="gallery__main-heading">
				<h1>Gallery</h1>
			</div>
			<div className="gallery__main-img">
				<div className="img-1">
					<img
						src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
						alt=""
					/>
				</div>

				<div className="img-container">
					<div className="flex-img-1">
						{" "}
						<img
							src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
							alt=""
						/>
					</div>
					<div className="flex-img-2">
						{" "}
						<img
							src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
							alt=""
						/>
					</div>
				</div>
				<div className="img-container-2">
					<div className="flex-img-2">
						{" "}
						<img
							src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
							alt=""
						/>
					</div>
					<div className="flex-img-1">
						{" "}
						<img
							src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
							alt=""
						/>
					</div>
				</div>
				<div className="img-1">
					<img
						src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
						alt=""
					/>
				</div>
				{/* <div className="img-container-2">
						<div className="main-img">
							<img
								src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
								alt=""
							/>
						</div>
						<span className="secondary-imgs">
							<img
								src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
								alt=""
                            />
                            <img
								src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
								alt=""
							/>
						</span>
					</div> */}
			</div>
			<div className="learn-more">Learn more</div>
		</div>
	);
};
