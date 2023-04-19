import { useTranslations } from 'next-intl';

function withTranslations(Component, target) {
	return (props) => {
		const t = useTranslations(target);

		return <Component t={t} {...props} />
	}
}

export default withTranslations;
