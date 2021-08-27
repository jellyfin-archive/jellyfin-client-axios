import fs from 'fs/promises';

(async (file) => {
	let txt = await fs.readFile(file);
	const json = JSON.parse(txt, (_, value) => {
		// Remove all "allOf" instances, this removes nullability/descriptions
		if (typeof value === 'object' && 'allOf' in value && value.allOf.length === 1) {
			return value.allOf[0];
		}
		
		return value;
	});

	txt = JSON.stringify(json);
	await fs.writeFile(file, txt);
})(process.argv[2]);
