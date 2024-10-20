import "../../app/[locale]/globals.scss";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/Heading";
import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import eq1 from "../../../public/image/equipment_work.webp";

const Place = () => {
	const t = useTranslations("place");

	return (
		<div className={"container"}>
			<Heading text={t("label")} />
			<Carousel type={"place"} isLoop={true}>
				<div className="embla__slide">
					<Image src={eq1} alt={"no Image"} />
				</div>
			</Carousel>
		</div>
	);
};

export default Place;
