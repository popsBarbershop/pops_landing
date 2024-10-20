import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.scss";

type CardProps = {
	title: string;
	price: string;
	time: string;
	link: string;
	src?: StaticImageData;
	buttonText: string;
};

const Card = (props: CardProps) => {
	const { title, price, time, link, src, buttonText } = props;

	return (
		<div className={styles.card}>
			<h2 className={styles.title}>{title}</h2>
			{src && <Image src={src} className={styles.icon} alt={"no image"} />}
			<div>
				<div className={styles.item}>
					<p>Price</p>
					<p>{price}</p>
				</div>
				<div className={styles.item}>
					<p>Time</p>
					<p>{time}</p>
				</div>
				<button className={styles.button}>{buttonText}</button>
			</div>
		</div>
	);
};

export default Card;
