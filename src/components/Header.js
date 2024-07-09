function Header() {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<img width={40} height={40} src='/img/logo.svg' alt='logo' />
				<div>
					<h3 className='text-uppercase'>React Sneackers</h3>
					<p>Магазин лучших кроссовок.</p>
				</div>
			</div>
			<ul className='d-flex align-center'>
				<li className='mr-10 d-flex align-center'>
					<img
						className='mr-10'
						width={18}
						height={18}
						src='/img/cart.svg'
						alt='logo'
					/>
					<span>1205 руб.</span>
				</li>
				<li className='d-flex align-center'>
					<img
						className='mr-10'
						width={18}
						height={18}
						src='/img/likes.svg'
						alt='logo'
					/>
					<span className='mr-10'>Закладки</span>
				</li>
				<li className='d-flex align-center'>
					<img
						className='mr-10'
						width={18}
						height={18}
						src='/img/user.svg'
						alt='logo'
					/>
					<span>Профиль</span>
				</li>
			</ul>
		</header>
	)
}

export default Header
