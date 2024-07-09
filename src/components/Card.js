function Card() {
	return (
		<div className='card pos-r'>
			<button className='pos-a'>
				<img src='/img/red-heart.svg' alt='' />
			</button>
			<img width={133} height={112} src='/img/sneakers/1.jpg' alt='sneakers' />
			<h5 className='text-left'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span className='mb-5'>Цена:</span>
					<b>12990 руб.</b>
				</div>
				<button>
					<img src='/img/add.svg' alt='plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
