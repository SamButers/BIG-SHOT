import React from 'react';

class Page extends React.Component {
	constructor(props) {
		super(props);

		this.externalClassNames = this.props.className ? ' ' + this.props.className : '';
	}
}

export default Page;
