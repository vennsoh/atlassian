const namespaces = process.argv[2];
const previousLockFile = process.argv[3];
const newLockFile = process.argv[4];

if(!namespaces || !previousLockFile || !newLockFile) {
  console.log(`Usage: node yarn-lock-diff.js @namespace,@other-namespace old-lock-file-string new-lock-file-string`)
  process.exit(1);
}

const targetedNamespaces = namespaces.split(',');

function parseLockFile(file) {
  return file.split('\n').reduce((acc, line, index, lines) => {
    if(targetedNamespaces.some(namespace => line.includes(namespace))) {
      const version = lines[index + 1].split('version').find(chunk => !!chunk.trim());

      if(!!version) {
        acc.push(version.trim().replace(/"/g, ''))
      }
    }
    return acc;
  }, []);
}

const oldPackageVersions = parseLockFile(previousLockFile);
const newPackageVersions = parseLockFile(newLockFile);

if(newPackageVersions.some(version => !oldPackageVersions.includes(version))) {
  console.log('true');
} else {
  console.log('false');
}
