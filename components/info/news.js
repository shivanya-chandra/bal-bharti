import React from "react";
import news from "../../public/data/news.json";

export const News = () => {
	return (
		<div className="news__main">
			<div className="news__main-heading">
				<h1>News</h1>
			</div>
			<div className="news__main-container">
				{news.map((i) => {
					const { heading, content, read, dated } = i;
					return (
						<div className="news-card">
							<div className="heading">{heading}</div>
							<div className="news-content">{content}</div>
							<div className="read">{read}</div>
							<div className="dated">{dated}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
