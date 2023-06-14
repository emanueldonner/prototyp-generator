const fs = require("fs-extra")
const path = require("path")

const renameNJKtoMD = async (dirPath) => {
	// get all files and directories from the directory
	const items = await fs.readdir(dirPath)

	for (const item of items) {
		const itemPath = path.join(dirPath, item)

		// check if the item is a directory
		if ((await fs.stat(itemPath)).isDirectory()) {
			// if it's a directory, apply the function recursively
			await renameNJKtoMD(itemPath)
		} else if (
			path.extname(item) === ".njk" &&
			path.basename(item, ".njk") === path.basename(dirPath)
		) {
			// if it's a .njk file and it shares the name with its parent directory, rename it to .md
			await fs.rename(
				itemPath,
				path.join(dirPath, `${path.basename(item, ".njk")}.md`)
			)
		}
	}
}

// use the function
// renameNJKtoMD("public/blocks/1-pattern")

const removeLine = async (dirPath) => {
	const items = await fs.readdir(dirPath)

	for (const item of items) {
		const itemPath = path.join(dirPath, item)

		if ((await fs.stat(itemPath)).isDirectory()) {
			await removeLine(itemPath)
		} else if (
			path.extname(item) === ".md" &&
			path.basename(item, ".md") === path.basename(dirPath)
		) {
			const data = await fs.readFile(itemPath, "utf-8")

			// delete line with "layout: pattern.njk"
			const newData = data
				.split("\n")
				.filter((line) => !line.includes("layout: pattern.njk"))
				.join("\n")

			await fs.writeFile(itemPath, newData, "utf-8")
		}
	}
}

removeLine("public/blocks/1-pattern")
