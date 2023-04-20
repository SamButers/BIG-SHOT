import { useLocale } from 'next-intl';

function withLocale(Component) {
	return (props) => {
		const locale = useLocale();

		return <Component locale={locale} {...props} />
	}
}

export default withLocale;
