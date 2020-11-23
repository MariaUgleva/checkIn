import React from 'react';
import { NewsType } from '../../type';
const news = require('./news.json');

const News: React.FC = () => {
	return (
		<div className="container">
			<div className="news">
				<h2 className="news__title">Последние новости</h2>
				<div className="news__list">
					{news.map((item: NewsType) => (
						<div key={item.id} id={item.id} className="news__item">
							<img src={item.url} alt="" className="news__item-img" />
							<div className="news__item-info">
								<h4 className="news__item-title">{item.title}</h4>
								<p className="news__item-text">{item.text.substring(0, 50) + '...'}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default News;
