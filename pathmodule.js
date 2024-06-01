const path=require('path');
const name=path.basename('/foo/bar/baz/asdf/quux.html');
const name1=path.dirname('/foo/bar/baz/asdf/quux.html');
const currentFile=path.extname(__filename);
console.log(name,name1,currentFile)