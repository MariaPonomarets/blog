/**
 * Created by mponomarets on 6/25/17.
 */
import {CHNAGE_TITLE, SET_ORIENTATION} from '../actions/types';

const INITIAL_STATE = {
	title: 'Blog',
	blogNewsList: [
		{
			id: 0,
			title: 'The number of protons',
			img: 'https://d1ro8r1rbfn3jf.cloudfront.net/ms_147804/TNyK0WoIawje0qokmJTAQAwjYkNjX0/%25D0%259C%25D0%25BE%25D0%25B9%2B%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25C2%25A0%25E2%2580%2593%2BGoogle%2B%25D0%2594%25D0%25B8%25D1%2581%25D0%25BA%2B2017-07-01%2B23-49-18.png?Expires=1499080687&Signature=e9eVSLtFl7wWEeJQqSp2TbsEDp~UIyZx3TR8ujaxAVyNwrj8Hk78I2qN432wswce7-uHnT~QZ4HUSyLLc2ydYCQK5qYeXzryozOC4s92UtZohWG09b5kjnl~ypH7nLDDxWuEI5RlP6ekdbOiVc~Xlv4ca2W4qSmSN1nHfRWEdTOjhfhWWSTbXgeZgWHrlohOuIP9ttrdOy7pOiYvwexcQGby3vr~bBN9eEnd-1tWCsnSYbKwOcC8oDp41bNrCqisT5WgcZpTrIqYtUJkKp0iJJYz-1gs7kQkI3-gqpxNL~HLdS1SR3b7uetOXbO8Iah7xulZ4CAVprJpIs75PGjjQA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA',
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 1,
			title: 'Sport Stadium Birdview ',
			img: 'https://d1ro8r1rbfn3jf.cloudfront.net/ms_147804/J75wHjMM8VHBiFl2O0bQAmBgh0SAHf/%25D0%259C%25D0%25BE%25D0%25B9%2B%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25C2%25A0%25E2%2580%2593%2BGoogle%2B%25D0%2594%25D0%25B8%25D1%2581%25D0%25BA%2B2017-07-01%2B23-50-34.png?Expires=1499080730&Signature=aGkhsuQ0ExM6iR13qwtas63Tt8Tdig5ij7JrFKrHrvSVWK3-5IjYxj~w2Ib-FfJls4253Xam~hk1nciJjzJdlGaude~Cm78nm8HsX-e4kDua4r6KnXc3Tu~hQDF8R2uaAdEK~N~P6g~qsSMyNj8hUlPE1nX-eDRE2ViNW1oBNu7QGInq~IyqVyJ12m8DOWaJFktamyVS5iqI5GwqZajbALtxqqqglRRXQDIEMfCk6NC8jitmfAErDM~VHgB560YdNgYXpNeEn0xiNSY1T--yAEUksxBftqsPPEiwN8UZiuF1~tWcXN8KCiMnQArJOQpdo~d73afxCpXhDM--fMbulA__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA',
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 2,
			title: 'The number of protons',
			img: 'https://d1ro8r1rbfn3jf.cloudfront.net/ms_147804/aggIjZrk1S9rMLMdLskQIVJBDTK8VZ/%25D0%259C%25D0%25BE%25D0%25B9%2B%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25C2%25A0%25E2%2580%2593%2BGoogle%2B%25D0%2594%25D0%25B8%25D1%2581%25D0%25BA%2B2017-07-01%2B23-51-05.png?Expires=1499080762&Signature=VQ3aCA0BGTDULIReizQd2P54jMjwnAh6MrXBzn~WQRpRyrGrpn5fn430jKFIpDqkBGrVe1H2nj4PwcE-wORajYHI3hsxcxNXg-YRZXKdsPCCUaHCMwV6Jve25yOw74Ho1AUJ7hiKTbtCa8vK0D3kT8K9DSwFWgi~~BIomMrk8mZaii790CmDG2X3kN9ue8QF8FTFObED9nz-J-VSmoqo6Aw8XcPg1M65lGnL4VlMjf5VIgcB1KemfGKFwP2gUHQosfX5M35nEFpeUd3ISr6H2yoqTvJhavFXU2TOlpuKfDnly2c2gsF8JWV0MGST6rLs9JsbtVlk-WA28dKgICMf3g__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA',
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 3,
			title: 'Sport Stadium Birdview ',
			img: 'https://d1ro8r1rbfn3jf.cloudfront.net/ms_147804/flYjywCVjdAMo0TA3R9Y8PgIhFrGbk/%25D0%259C%25D0%25BE%25D0%25B9%2B%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25C2%25A0%25E2%2580%2593%2BGoogle%2B%25D0%2594%25D0%25B8%25D1%2581%25D0%25BA%2B2017-07-01%2B23-52-22.png?Expires=1499080792&Signature=Gpjn48HflxAkyJs9sKuaCWkS40NvpNwx4JjmZcLZhYJRrO0TZwkL9vShkUU78wQsVWwkTScNpQMVhyvV8ajW5jjYgOA5sxbYT0dHjG55JQEpPEklCHUFjB83JU3dq86VNIUah91D2iDt0njvLJ87o3MtuBudMWHcdKS7Cx3cJeMivf3Lb8Z5uCLuMhm8SQoLQ7fFaQZfiuaLN6Zg35nFxvqyiakCzCNu1uxm~aS57U8ZuW3EDPV1d1O275N-z2uJyKBvSr3A-Si-Zdfyc4nTlQFD08meHrTYOphCknE0IsbxlkdGbdupC5ljXA7l3xWYSYPUdXOy6nAl7XuDv1Pgdg__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA',
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		},
		{
			id: 4,
			title: 'The number of protons',
			img: 'https://d1ro8r1rbfn3jf.cloudfront.net/ms_147804/hdzx5gg2CGM24sCvVa18DYKArKGxdU/%25D0%259C%25D0%25BE%25D0%25B9%2B%25D0%25B4%25D0%25B8%25D1%2581%25D0%25BA%25C2%25A0%25E2%2580%2593%2BGoogle%2B%25D0%2594%25D0%25B8%25D1%2581%25D0%25BA%2B2017-07-01%2B23-53-21.png?Expires=1499080813&Signature=Y4UL8q0n7s2RrWAMBiHYg-K-8AdRYoUB8AohVKPBu6knDNdulALH1ZTsxVhfRy4WGD57oHuGzuyZNrKnmY~-QVpvAgKh9nFDzbCVNpnlcg2VakCUH8dit4rWaiR0JI~~Z05m2f9vi5OhSrB43aEfvaxsqf1GukkMR8BrtcqKBnXe8SA0DToZRUmJAAPgoNoEBzn01KLyiwYLthJECe9HlsRhZ55OFX1VgBdVxJ6c~rGXZGToncceoZF2OetnbSFRD3nRiN0brM-8n4E~hYtFSAMbw1Ik7p0XnACdl6EJWeZZl1Yvj26EZHJRrrEIiDySvxE6TzhMp6GxKZrgMD0oog__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA',
			date: 1433106000000,
			views: 343,
			description: 'Apple Inc has decided to launch the much awaited Apple Watch in'
		}
	],
	calendarData: {
		'mo': [
			{
				'bt': 240,
				'et': 779
			}
		],
		'tu': [],
		'we': [],
		'th': [
			{
				'bt': 240,
				'et': 779
			},
			{
				'bt': 1140,
				'et': 1319
			}
		],
		'fr': [
			{
				'bt': 660,
				'et': 1019
			}
		],
		'sa': [
			{
				'bt': 0,
				'et': 1439
			}
		],
		'su': []
	},
	orientation: 'LANDSCAPE',
	deviceWidth: 0,
	deviceHeight: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHNAGE_TITLE:
			return {...state, title: action.payload};
		case SET_ORIENTATION:
			return {
				...state,
				orientation: action.orientation,
				deviceWidth: action.deviceWidth,
				deviceHeight: action.deviceHeight
			};
		default:
			return state;
	}
};