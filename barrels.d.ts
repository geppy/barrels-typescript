// Type definitions for Barrels
// Project: https://github.com/bredikhin/barrels
// Definitions by: Brian Geppert <https://github.com/briangeppert>

interface Barrels {
	load(): Barrels;
	populate(callback: (err) => void);
	objects: {
		files: Array<Object>
	};
}

declare module "barrels" {
	var barrels: Barrels;
	export = barrels;
}
