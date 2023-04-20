import Page from '@/utils/Page';
import Image from 'next/legacy/image';
import Head from 'next/head';
import { withRouter } from 'next/router';

import withLocale from '@/utils/withLocale';
import withTranslations from '@/utils/withTranslations';

import banner from '$/imgs/news/banner.webp';

class News extends Page {
	constructor(props) {
		super(props);

		this.state = {
			localeStrings: {
				by: '',
				post: {
					title: '',
					content: ''
				}
			}
		}

		this.getLocaleStrings = this.getLocaleStrings.bind(this);
	}

	getLocaleStrings() {
		const t = this.props.t;

		this.setState({
			localeStrings: {
				by: t('by'),
				post: {
					title: t('post.title'),
					content: t.rich('post.content', {
						p: (content) => <p>{ content }</p>,
						a: (content) => {
							const linkRegexResult = content[0].match(/\[(?<anchor>.*)]\((?<url>.*)\)/);
							const anchor = linkRegexResult.groups.anchor;
							const url = linkRegexResult.groups.url;
	
							return <a className="text-primary-500 hover:text-primary-300" href={url} target="_blank" rel="noopener">{ anchor }</a>
						}
					})
				}
			}
		});
	}

	componentDidMount() {
		this.getLocaleStrings();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.messages != this.props.messages)
			this.getLocaleStrings();
	}

	render() {
		return (
			<main className={`w-full min-h-screen overflow-x-hidden ${this.externalClassNames}`}>
				<Head>
					<title>{ this.props.t('pageTitle') }</title>
				</Head>

				<section className={`flex flex-col gap-y-4 mx-auto
					w-[270px] mt-[24px]
					sm:w-[540px]
					md:mt-[62px]
					lg:mt-[62px]
					xl:w-[1080px]
					4xl:w-[2160px] 4xl:rendering-pixelated
				`}>
					<div>
						<div className={`w-full relative aspect-[2.3326]`}>
							<Image src={banner}
								alt="News banner"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								unoptimized={true}
								draggable={false}
							/>
						</div>

						<h1 className={`font-blazma text-primary-300
							text-[1.75rem] leading-[1.75rem]
							sm:text-[3rem] sm:leading-[3rem]
							xl:text-[4rem] xl:leading-[4rem]
							4xl:text-[8rem] 4xl:leading-[8rem]
						`}>{ this.state.localeStrings.post.title }</h1>
						<hr className={`border-t border-t-p-black opacity-50`} />
						<div className={`
							ml-0
							sm:ml-1
							4xl:ml-2
						`}>
							<time className={`font-glametrix text-p-black
								text-[1rem] leading-[1rem]
								sm:text-[1.25rem] sm:leading-[1.25rem]
								xl:text-[1.5rem] xl:leading-[1.5rem]
								4xl:text-[3rem] 4xl:leading-[3rem]
							`} dateTime="2023-04-18T10:30:00.000Z">
								{
									new Date('2023-04-18T10:30:00.000Z').toLocaleDateString(this.props.locale, {
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})
								}
							</time>
							<p className={`font-glametrix text-p-black
								text-[1.25rem] leading-[1.25rem]
								sm:text-[1.5rem] sm:leading-[1.5rem]
								xl:text-[1.75rem] xl:leading-[1.75rem]
								4xl:text-[3.5rem] 4xl:leading-[3.5rem]
							`}>{ this.state.localeStrings.by } Samuel Buters</p>
						</div>
						<hr className={`border-t border-t-p-black opacity-50`} />

						<div className={`flex flex-col gap-y-6 font-glametrix text-p-black whitespace-pre-line text-justify
							text-[1.25rem] leading-[1.5rem] my-2
							sm:text-[1.5rem] sm:leading-[1.75rem] sm:my-4
							xl:text-[1.75rem] xl:leading-[2rem]
							4xl:text-[3.5rem] 4xl:leading-[4rem]
						`}>
							{ this.state.localeStrings.post.content }
						</div>
						<hr className={`border-t border-t-p-black opacity-50`} />
					</div>
				</section>
			</main>
		)
	}
}

export default withLocale(withTranslations(News, 'news'));

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: {
				common: (await import(`../../locales/${locale}/common.json`)).default,
				news: (await import(`../../locales/${locale}/news.json`)).default
			}
		}
	}
}
