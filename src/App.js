import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

const arr = [
	{
		title: 'Мужжсские Кроссовки Nike Blazer Mid Suede',
		price: 12990,
		imageUrl: 'img/sneakers/1.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Air Max 270',
		price: 15600,
		imageUrl: 'img/sneakers/2.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 10600,
		imageUrl: 'img/sneakers/3.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8990,
		imageUrl: 'img/sneakers/4.jpg',
	},
	{
		title: 'Мужские Кроссовки Under Armour Curry 8',
		price: 15199,
		imageUrl: 'img/sneakers/5.jpeg',
	},
	{
		title: 'Мужские Кроссовки Nike Kyrie 7',
		price: 11299,
		imageUrl: 'img/sneakers/6.jpeg',
	},
	{
		title: 'Мужские Кроссовки Jordan Air Jordan 11',
		price: 10790,
		imageUrl: 'img/sneakers/7.jpeg',
	},
	{
		title: 'Мужские Кроссовки Nike LeBron XVIII',
		price: 16490,
		imageUrl: 'img/sneakers/8.jpeg',
	},
	{
		title: 'Мужские Кроссовки Nike Lebron XVIII Low',
		price: 13199,
		imageUrl: 'img/sneakers/9.jpeg',
	},
	{
		title: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8490,
		imageUrl: 'img/sneakers/1.jpg',
	},
	{
		title: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8990,
		imageUrl: 'img/sneakers/4.jpg',
	},
	{
		title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
		price: 12490,
		imageUrl: 'img/sneakers/10.jpeg',
	},
]

function App() {
	return (
		<div className='wrapper clear '>
			<Header />
			<div className='content p-40'>
				<Drawer />

				<div className='d-flex justify-between align-center mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img className='ml-5' src='/img/search.svg' alt='Search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-grid justify-between'>
					{arr.map(obj => (
						<Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
