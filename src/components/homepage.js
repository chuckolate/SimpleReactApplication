import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/style.css";

class Homepage extends Component {
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
				<div className="content-background">
					<h2>The History of Tea</h2>
				</div>
				<div className="content-background-response">
					<p>Tea’s origin story is infused with a blend of myth and fact and colored by ancient concepts of spirituality and philosophy.

According to Chinese legend, the history of tea began in 2737 B.C.E. when the Emperor Shen Nong, a skilled ruler and scientist, accidentally discovered tea. While boiling water in the garden, a leaf from an overhanging wild tea tree drifted into his pot. The Emperor enjoyed drinking the infused water so much that he was compelled to research the plant further. Legend has it that the Emperor discovered tea's medicinal properties during his research.

Indian history attributes the discovery of tea to Prince Bodhi-Dharma, an Indian saint who founded the Zen school of Buddhism. In the year 520, he left India to preach Buddhism in China. To prove some Zen principles, he vowed to meditate for nine years without sleep. It is said that towards the end of his meditation, he fell asleep. Upon awaking, he was so distraught that he cut off his eyelids, and threw them to the ground. Legend has it that a tea plant sprung up on the spot to sanctify his sacrifice.</p>
				<a href="https://www.mightyleaf.com/history-of-tea" target="_blank" rel="noopener noreferrer">Click here to read more about the history of tea!</a>
				</div>
				<div className="content-header">
					<h2>13 Reasons Why Tea is Beneficial for your Body</h2>
				</div>
				<div className="content-header-response">
					<ol>
						<li>Boost exercise endurance</li>
						<li>Reduce risk of heart attack</li>
						<li>Antioxidants in tea protect againsts a boatload of cancers</li>
						<li>Fight free radicals</li>
						<li>Hydrating to the body</li>
						<li>Lower risk of Parkinson's disease</li>
						<li>Protection from ultraviolent rays</li>
						<li>Keep waist circumference in check</li>
						<li>Counteract negative effects of smoking</li>
						<li>Helps process sugar for those with type 2 diabetes</li>
						<li>Recover body from radiation</li>
						<li>Improve bone mineral density and strength</li>
						<li>Effective agent in the prevention and treatment of neurological diseases, especially degenerative diseases</li>
					</ol>
					<a href="http://healthland.time.com/2012/09/04/13-reasons-to-love-tea" target="_blank" rel="noopener noreferrer">More in-depth benefits of tea here</a>
				</div>
			</div>
		);
	}
}

export default Homepage;