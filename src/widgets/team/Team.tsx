import "../../app/[locale]/globals.scss";
import { useTranslations } from "next-intl";
import Heading from "@/components/heading/Heading";
import Member from "@/components/member/Member";
import styles from "./Team.module.scss";
import ArtsiomMember from "../../../public/image/artsiom_card.webp";
import EvgeniiMember from "../../../public/image/evgenij_card.webp";
import RomanMember from "../../../public/image/roman_card.webp";
import Carousel from "@/components/carousel/Carousel";

const Team = () => {
	const t = useTranslations("team");

	return (
		<div className={styles.team}>
			<div className={"container"}>
				<Heading isWhite={true} text={t("label")} />
				<div className={styles.content}>
					<Carousel type={"team"}>
						<>
							<Member
								src={ArtsiomMember}
								description={"some text"}
								languages={"some lang"}
								link={"https://booksy.com"}
							/>
							<Member
								src={EvgeniiMember}
								description={"some text"}
								languages={"some lang"}
								link={"https://booksy.com"}
							/>
							<Member
								src={RomanMember}
								description={"some text"}
								languages={"some lang"}
								link={"https://booksy.com"}
							/>
						</>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Team;
