"use client";
import "../../app/[locale]/globals.scss";
import Heading from "@/components/heading/Heading";
import { useTranslations } from "next-intl";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import h2 from "../../../public/image/haircuts/h2.webp";
import h3 from "../../../public/image/haircuts/h3.webp";
import h4 from "../../../public/image/haircuts/h4.webp";

const Portfolio = () => {
	const t = useTranslations("portfolio");

	return (
		<div className={"container"}>
			<Heading text={t("label")} />
			<Carousel type={"portfolio"} isLoop={true}>
				<div className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h2} alt={"no Image"} />
					</div>
				</div>
				<div className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h3} alt={"no Image"} />
					</div>
				</div>
				<div className="embla__slide">
					<div className="aspect-w-9 aspect-h-16 w-full">
						<Image className={styles.image} src={h4} alt={"no Image"} />
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Portfolio;
