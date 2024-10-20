import Image, { StaticImageData } from "next/image";
import styles from "./Member.module.scss";

type MemberProps = {
	src: StaticImageData;
	description: string;
	languages: string;
	link: string;
};

const Member = (props: MemberProps) => {
	const { src, description, languages, link } = props;

	return (
		<div className={styles.member}>
			<Image className={styles.image} src={src} alt={"no member image"} />
			<div className={styles.content}>
				<p className={styles.description}>{description}</p>
				<p className={styles.languages}>{languages}</p>
				<button className={styles.button}>BOOK MY VISIT</button>
			</div>
		</div>
	);
};

export default Member;
