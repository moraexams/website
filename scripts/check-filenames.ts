import { join, relative, sep } from "node:path";

if (process.argv.length < 3) process.exit(0);

const files = process.argv.slice(2);
const mismatchedFiles = [];
const PATTERN_SEGMENT = /^[\[\]a-z0-9]+(-[a-z0-9]+)*$/;

for (const file of files) {
	const relativePath = relative(join(__dirname, "../"), file);

	if (!relativePath.startsWith("src")) {
		continue;
	}

	const segments = relativePath.split(sep);

	for (const segment of segments) {
		if (!segment || segment === "." || segment === "..") continue;

		const nameWithoutExt = segment.includes(".")
			? segment.slice(0, segment.lastIndexOf("."))
			: segment;

		if (!PATTERN_SEGMENT.test(nameWithoutExt)) {
			console.error(`❌ Invalid name: ${relativePath}`);
			mismatchedFiles.push(relativePath);
			break;
		}
	}
}

if (mismatchedFiles.length !== 0) {
	console.error(
		"\nERROR: All filenames and folder names must be kebab-case (lowercase and hyphens only).",
	);
	console.error(
		"       Example: about-us.js, components/blog-post/card.astro\n",
	);
	process.exit(20);
}

console.log("✅ All filenames and folders are kebab-case.");
