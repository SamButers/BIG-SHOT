/* eslint react-hooks/rules-of-hooks: 0 */

import { useContext } from 'react';

function withContexts(Component, contexts) {
	return function ContextHOC(props) {
		const contextInstances = {};

		for(const key of Object.keys(contexts)) {
			contextInstances[key] = useContext(contexts[key]);
		}

		return <Component contexts={contextInstances} {...props} />
	}
}

export default withContexts;
