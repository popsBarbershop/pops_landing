import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "pl"],
	defaultLocale: "pl"
});

export const config = {
	matcher: ["/", "/(pl|en)/:path*"]
};
