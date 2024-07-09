import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
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
				<div className='d-flex justify-between'>
					<Card />

					<div className='card pos-r'>
						<button className='pos-a'>
							<img src='/img/heart.svg' alt='save' />
						</button>
						<img
							width={133}
							height={112}
							src='/img/sneakers/2.jpg'
							alt='sneakers'
						/>
						<h5 className='text-left'>Мужские Кроссовки Nike Air Max 270</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span className='mb-5'>Цена:</span>
								<b>12990 руб.</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>

					<div className='card pos-r'>
						<button className='pos-a'>
							<img src='/img/heart.svg' alt='' />
						</button>
						<img
							width={133}
							height={112}
							src='/img/sneakers/3.jpg'
							alt='sneakers'
						/>
						<h5 className='text-left'>
							Мужские Кроссовки Nike Blazer Mid Suede
						</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span className='mb-5'>Цена:</span>
								<b>8 499 руб. руб.</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>

					<div className='card pos-r'>
						<button className='pos-a'>
							<img src='/img/heart.svg' alt='' />
						</button>
						<img
							width={133}
							height={112}
							src='/img/sneakers/4.jpg'
							alt='sneakers'
						/>
						<h5 className='text-left'>
							Кроссовки Puma X Aka Boku Future Rider
						</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span className='mb-5'>Цена:</span>
								<b>8 999 руб. руб.</b>
							</div>
							<button>
								<img src='/img/plus.svg' alt='' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
