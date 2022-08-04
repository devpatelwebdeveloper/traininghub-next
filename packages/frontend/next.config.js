/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;

const withTM = require("next-transpile-modules")([
	"@traininghub-next/components",
]);
module.exports = withTM();
