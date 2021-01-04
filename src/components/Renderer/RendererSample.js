import React, { Component } from 'react';
import { Intertwine } from '../Loaders/Intertwine';
import { sampleModel } from './sampleModel';

class RendererSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	componentDidMount() {
		const that = this;

		// Get renderer script and append it to the html file
		const script = 'https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist-1.0.1.js';
		const element = document.createElement('script');
		element.async = true;
		document.body.appendChild(element);

		element.onload = function () {
			that.setState({ loaded: true });

			// Create an instance of the viewer
			const viewer = new SKYCIV.renderer({
				container_selector: '#renderer-container',
			});

			// Get sample model
			const s3d_model = sampleModel;

			// Set and render sample model
			viewer.model.set(s3d_model);
			viewer.model.buildStructure();
			viewer.render();
		};

		// Add onload before src to make sure cache script fires onload.
		element.src = script;
	}

	render() {
		return this.state.loaded ? (
			<div
				id='renderer-container'
				style={{ width: '100%', height: '500px', position: 'relative' }}
			></div>
		) : (
			<Intertwine />
		);
	}
}

export default RendererSample;
