// reviews.service.ts

// Интерфейсы для данных, которые мы получаем из Google Places API

export interface Review {
	relativePublishTimeDescription: string;
	rating: number;
	originalText: {
		text: string;
	};
	authorAttribution: {
		displayName: string;
		photoUri: string;
	};
}

interface PlaceDetailsResponse {
	rating: number;
	reviews: Review[];
}

class ReviewsService {
	private readonly API_KEY: string;
	private readonly PLACE_ID: string;
	private readonly BASE_URL: string = "https://places.googleapis.com/v1/places";

	constructor(apiKey: string, placeId: string) {
		this.API_KEY = apiKey;
		this.PLACE_ID = placeId;
	}

	private buildUrl(): string {
		return `${this.BASE_URL}/${this.PLACE_ID}?&fields=rating,reviews&key=${this.API_KEY}`;
	}

	public async getPlaceReviews(): Promise<PlaceDetailsResponse | []> {
		const url = this.buildUrl();
		console.log(url);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Data parse error: ${response.status}`);
			}

			const data: PlaceDetailsResponse = await response.json();

			if (data && data.reviews && data.rating) {
				return data;
			} else {
				return [];
			}
		} catch (error) {
			console.error("Reviews error", error);
			return [];
		}
	}
}

export const reviewsService = new ReviewsService(
	process.env.API_KEY as string,
	process.env.PLACE_ID as string
);
