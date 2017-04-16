import React,{Component} from 'react';
import {Card} from 'elemental';

export default class WebPreview extends Component {
	render () {
		return (
			<Card>
				<img src={`data:image/png;base64, ${this.props.image}`} />
			</Card>
		)
	}
}