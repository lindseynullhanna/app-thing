/** @jsx React.DOM */

'use strict';

var React = require('react');

var thing = React.createClass({
	render: function() {
		return (
			<div className="rawr">
			<h1>Hello</h1>
			</div>
		);
	}
});

React.render(
	React.createElement(thing, null),
	document.getElementById('content')
);
