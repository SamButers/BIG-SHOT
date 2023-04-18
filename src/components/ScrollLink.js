import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { isAt4KBreakpoint } from '@/utils/device';

const navbarHeight = 72;
const navbarHeight4xl = 144;

class ScrollLink extends React.Component {
	constructor(props) {
		super(props);

		this.scrollHandler = this.scrollHandler.bind(this);
	}

	scrollHandler(e) {
		const pathRegexResult = this.props.href.match(/(?<pathname>.*?)(#(?<hash>.*))?$/);
		const pathname = pathRegexResult.groups.pathname;
		const hash = pathRegexResult.groups.hash;

		if(!pathname || pathname == this.props.router.pathname) {
			if(hash) {
				const element = document.getElementById(hash);
	
				if(element) {
					e.preventDefault();

					const offset = isAt4KBreakpoint() ? -navbarHeight4xl : -navbarHeight;
	
					window.scrollTo({
						top: element.getBoundingClientRect().top + window.scrollY + offset,
						behavior: 'smooth'
					});
				}
			}

			else {
				e.preventDefault();
	
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}
		}
	}

	render() {
		return (
			<Link {...this.props} onClick={this.scrollHandler}>
				{ this.props.children }
			</Link>
		);
	}
}

export default withRouter(ScrollLink);
