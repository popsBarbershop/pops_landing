import Heading from "@/components/heading/Heading";
import { useTranslations } from "next-intl";
import { Review, reviewsService } from "@/services/reviews.service";

interface RatingProps {
	rating: number;
	reviews: Review[];
}

const Rating = ({ reviews = [] }: RatingProps) => {
	const t = useTranslations("about");

	return (
		<div className={"container"}>
			<Heading text={t("label")} />

			<div className={"reviews"}>
				{reviews.length > 0 ? (
					reviews.map((review, index) => (
						<div key={index} className={"review"}>
							<h3>{review.authorAttribution.displayName}</h3>
							<p>Оценка: {review.rating}</p>
							<p>{review.originalText.text}</p>
						</div>
					))
				) : (
					<p>Отзывы не найдены.</p>
				)}
			</div>
		</div>
	);
};

export default Rating;

export const getStaticProps = async () => {
	const reviews = await reviewsService.getPlaceReviews();
	console.log("reviews", reviews);
	console.log("something");

	return {
		props: {
			reviews: reviews || []
		},
		revalidate: 7200
	};
};
