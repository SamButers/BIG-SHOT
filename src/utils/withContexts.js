import { useContext } from 'react';

function withContexts(Component, contexts) {
	return (props) => {
		const contextInstances = {};

		Object.keys(contexts).forEach((key) => {
			contextInstances[key] = useContext(contexts[key]);
		});

		return <Component contexts={contextInstances} {...props} />
	}
}

export default withContexts;
