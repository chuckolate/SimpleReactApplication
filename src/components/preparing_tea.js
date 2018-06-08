import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.css";

/*
	sources:
	1. http://us.teagschwendner.com/US/en/Preparing_Tea.TG?activeID=1681&parent_id=
	2. https://www.itoen.com/all-things-tea/preparing-tea
*/

export default class PreparingTea extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<h1>Tree Leaves</h1>
				</div>
				<div className="text-xs-left">
					<table cellspacing="20">
						<tr><th><Link className="btn btn-primary" to="/">Home</Link></th>
						<th><Link className="btn btn-primary" to="/teas">Different Types of Teas</Link></th>
						<th><Link className="btn btn-primary" to="/preparing_tea">How To Prepare Tea</Link></th>
						</tr>
					</table>
				</div>
				<div className="content-prepare">
					<h2>The Importance of Preparing Tea</h2>
				</div>
				<div className="content-prepare-reponse">
					<p>The world of tea offers tremendous diversity. Region, season, cultivar and method of production are but a few of the factors that can influence the quality and character of the cup. And then, of course, there is the method of preparation – a matter of obvious importance to quality. But there is also the subjective experience, the mood that we bring to the cup. How is it possible for the same tea to taste different each time?

Tea is, indeed, a puzzling sort of cultural magic – so widely adored that it has also evolved into an intensely private ritual, rich with individual preferences. The complex interplay of nature and nurture that results in each particular cup is breathtaking, and yet for the millions of variables there is a simple truth:
Good tea is tea the way you like it.
We have tested every single variety of tea to arrive at our recommendations for tea leaf quantity, brewing time and water temperature. These recommendations accompany each tea we sell and will assist you in preparing a cup of outstanding quality.
But just as the growing and production of tea can be both art and science, so is the creation of each cup. If our suggestions do not yield your idea of perfection, then allow your curiosities to map out your very own course. In the end, the only rule is enjoyment!
Inside, you will learn about the “Three Ts” – Time, Temperature and the amount of Tea – that yield the perfect cup. Naturally, it is also important that you use high-quality, filtered or bottled water when making tea. Even the best tea cannot overcome poor water quality.</p>
				<a href="http://us.teagschwendner.com/US/en/Preparing_Tea.TG?activeID=1681&parent_id=" target="_blank" rel="noopener noreferrer">Original source here</a>
				</div>
				<div className="content-tea-table">
					<h2>Tea Instructions and General Guidelines</h2>
					<a href="https://www.itoen.com/all-things-tea/preparing-tea" target="_blank" rel="noopener noreferrer"><i>Image from ItoEn Website</i></a>
					<div className="content-tea-img" />
				</div>
			</div>
		);
	}
}