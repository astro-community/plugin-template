// this utility script helps you rename the example plugin
// it should be removed in a later release

import * as fs from 'node:fs/promises'
import * as process from 'node:process'

/** Print the usage of this script. */
function usage() {
	console.log('Rename a package in this project')
	console.log()
	console.log('Usage:')
	console.log('node scripts/rename OLD_NAME NEW_NAME')
}

/** Rename a package in package.json files in this project. */
async function renamePackageJSON(dirURL, oldName, newName) {
	const pkgURL = new URL('package.json', dirURL)

	const pkg = await fs.readFile(pkgURL, 'utf-8').catch(() => null)

	const oldNameJSON = new RegExp(`("|')${oldName.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')}\\1`, 'g')
	const newNameJSON = `$1${newName}$1`

	if (pkg && oldNameJSON.test(pkg)) {
		console.log(`  Updated ${pkgURL.pathname}`)

		return fs.writeFile(pkgURL, pkg.replace(oldNameJSON, newNameJSON))
	}
}

async function main() {
	if (process.argv.length < 4) {
		usage()
		process.exit(0)
	}

	const oldName = process.argv[2].trim().toLowerCase().replace(/[^@/a-z0-9-]+/g, '-')
	const newName = process.argv[3].trim().toLowerCase().replace(/[^@/a-z0-9-]+/g, '-')

	console.log(`Renaming "${oldName}" to "${newName}".`)
	console.log()

	// rename of root
	const rootURL = new URL('../', import.meta.url)
	await renamePackageJSON(rootURL, oldName, newName)

	// rename of package
	const pkgsURL = new URL('packages/', rootURL)
	for await (const dir of await fs.opendir(pkgsURL)) {
		if (dir.isDirectory()) {
			await renamePackageJSON(new URL(dir.name + '/', pkgsURL), oldName, newName)

			const oldDirName = oldName.replace(/^@[^/]+\//, '')
			const newDirName = newName.replace(/^@[^/]+\//, '')

			if (dir.name === oldDirName) {
				await fs.rename(new URL(oldDirName + '/', pkgsURL), new URL(newDirName + '/', pkgsURL))
			}
		}
	}

	// rename of demo
	await renamePackageJSON(new URL('demo/', rootURL), oldName, newName)

	process.exit(0)
}

await main()
