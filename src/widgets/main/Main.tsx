import { useTranslations } from "next-intl";
import "../../app/[locale]/globals.scss";
import styles from "./Main.module.scss";
import Link from "next/link";
import IS_MOBILE from "@/helpers";

const Main = () => {
	const t = useTranslations("main");

	return (
		<div className={styles.block}>
			{IS_MOBILE ? (
				<video
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoBackground}
					src={"/video/video.mp4"}
				></video>
			) : (
				<video
					autoPlay
					loop
					muted
					playsInline
					className={styles.videoBackground}
					src={"/video/bg_video.mp4"}
				></video>
			)}

			<div className={styles.container}>
				<div className={styles.overlay}>
					<h1 className={styles.brandName}>
						POPS <br /> BARBERSHOP
					</h1>
					<Link
						className={styles.button}
						href={
							"https://booksy.com/pl-pl/187397_barbershop-pops_barber-shop_3_warszawa#ba_s=seo"
						}
					>
						{t("button")}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Main;
