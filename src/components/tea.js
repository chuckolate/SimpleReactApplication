import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TeaDisplay from './display_tea';

const TEAS = [
  { name: "White Tea", img: "https://i1.wp.com/tea101.teabox.com/wp-content/uploads/2017/01/White-Tea_1.jpg?fit=750%2C500&ssl=1", desc: "White Teas are the least processed of all teas. they release the least amount of caffeine of all teas, generally ranging from 10-15 milligrams per 8 oz cup. almost all white teas hail from fujian province, china." },
  { name: "Green Tea", img: "http://www.healthywomen.org/sites/default/files/green-tea.jpg", desc: "Green Tea leaves plucked in the morning are ready to be brewed in a pot the same night. the bypass of oxidation allows green tea to retain most of its natural dark green color, tannins, vitamin c, chlorophyll and minerals. the taste of green tea is therefore more astringent and subtler than oolong or black tea." },
  { name: "Oolong Tea", img: "https://naturallydaily.com/wp-content/uploads/2016/11/Oolong-Tea.jpg", desc: "Oolong Teas are semi–oxidized, which places them mid–way between green and black teas. this gives them the body and complexity of a black tea, with the brightness and freshness of a green tea." },
  { name: "Black Tea", img: "https://cdn3.volusion.com/wujpw.hoypm/v/vspfiles/photos/3109-2.jpg?1500898656", desc: "Black Teas are fully oxidized teas. black teas brew a liquor from reddish brown to dark brown. they are the most popular type of tea in the western world. black teas range from 40 – 60 milligrams of caffeine per 8 oz cup." },
  { name: "Pu'erh Tea", img: "http://servingjoy.com/wp-content/uploads/2014/12/Chinese-black-pu-erh-tea-and-tea-leaves.jpg", desc: "Pu’erh Teas are aged and fermented. these aged teas are revered throughout asia for their medicinal benefits, which range from curing hangovers to reducing cholesterol." },
  { name: "Herbal Tea", img: "https://andreabeaman.com/wp-content/uploads/2017/04/iStock-512889439.jpg", desc: "The history of herbs and spices is far more ancient than that of tea. herbal infusions are not tea, per se, as they do not come from the camellia sinensis plant. they are popular after’dinner beverages and naturally 100% caffeine–free." }
];

export default class Tea extends Component {
	constructor() {
    super();
    this.state = {
      activeTea: 0,
    };
  }

	render() {
		const activeTea = this.state.activeTea;
		return (
			<div>
				<div className="header">
					<h1>Tree Leaves</h1>
				</div>
				<div className="text-xs-left">
					<table cellspacing="20">
						<tr>
							<th><Link className="btn btn-primary" to="/">Home</Link></th>
							<th><Link className="btn btn-primary" to="/teas">Different Types of Teas</Link></th>
							<th><Link className="btn btn-primary" to="/preparing_tea">How To Prepare Tea</Link></th>
						</tr>
					</table>
				</div>
				<div>
					{TEAS.map((tea, index) => (
          				<button
            				key={index}
            				onClick={() => {
              					this.setState({ activeTea: index })}} >
              					{ tea.name }
              			</button>
              		))}

        <TeaDisplay
          key = { activeTea }
          name = { TEAS[activeTea].name }
          img = { TEAS[activeTea].img }
          desc = { TEAS[activeTea].desc } />
				</div>
			</div>
		);
	}
}