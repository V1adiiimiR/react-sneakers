import styles from './Card.module.scss'

function Card(props) {
	return (
		<div className={styles.card}>
			<button className={styles.favorite}>
				<img src='/img/heart.svg' alt='' />
			</button>
			<img width={133} height={112} src={props.imageUrl} alt='sneakers' />
			<h5 className='text-left'>{props.title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span className='mb-5'>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button>
					<img src='/img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
