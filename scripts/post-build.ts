
(async () => {
    const CONTENT_BUILD_PATH = 'src/client/content.js'
    // const INJECT_PATH = 'src/client/inject.js'
    const fs = (await import('fs')).default
    const path = (await import('path')).default
    const pkg = JSON.parse(fs.readFileSync('dist/manifest.json').toString());
    // pkg.content_scripts[0].js[0] = INJECT_PATH
    pkg.content_scripts[0].js[0] = CONTENT_BUILD_PATH
    fs.writeFileSync('dist/manifest.json', JSON.stringify(pkg, null, 2))
    fs.writeFileSync('dist/'+ CONTENT_BUILD_PATH, fs.readFileSync('src/client/content.js').toString())
    // fs.writeFileSync('dist/'+ INJECT_PATH, fs.readFileSync('src/client/inject.js').toString())
    const directory = 'dist/assets/';
    fs.readdir(directory, (err, files) => {
        files.forEach(file => {
          if(file.startsWith('content'))
                fs.unlinkSync( path.resolve(directory + file)) 
        });
    });
  })();
