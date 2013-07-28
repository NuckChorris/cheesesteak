# Cheesesteak

A delicious Filey Cheesesteak for your JS. Improves the FileList and File prototypes for max sanity.

## FileList API
### FileList#forEach(callback[, thisArg])
Same as Array.forEach; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](Mozilla Developer Network)

### FileList#every(callback[, thisObject])
Same as Array.every; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every](Mozilla Developer Network)

### FileList#some(callback[, thisObject])
Same as Array.some; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some](Mozilla Developer Network)

### FileList#filter(callback[, thisObject])
Same as Array.filter; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](Mozilla Developer Network)

### FileList#map(callback[, thisArg])
Same as Array.map; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map](Mozilla Developer Network)

### FileList#reduce(callback[, initialValue])
Same as Array.reduce; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce](Mozilla Developer Network)

### FileList#reduceRight(callback[, initialValue])
Same as Array.reduceRight; see [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight](Mozilla Developer Network)

### FileList#size
Total size of all files as a Number.

### FileList#uploadedSize
Total size uploaded so far via the .upload() method as a Number.

### FileList#humanSize
Total size of all files as a String expressed in human-readable binary units (mibibytes etc.)

### FileList#percentUploaded
Percent of total data uploaded so far via the .upload() method, represented as a floating-point value from 0 to 1.

### FileList#upload(url, opts)
Returns a FileListUploader which can have events bound to it and then have the upload process started.

## File API
### File#humanSize
Size of file as a String expressed in human-readable binary units (mibibytes, etc.)

### File#uploadedSize
Total size (from this file) uploaded so far via the .upload() method as a Number.

### File#percentUploaded
Percent of data (from this file) uploaded so far via the .upload() method, represented as a floating-point value from 0 to 1.

### File#url
Retrieves an Object URL for the file.

**WARNING** Repeatedly calling this without calling File.revokeURL is a bad idea and causes memory leaks; I strongly recommend, for an img tag, to use the onload event to revokeURL.

### File.revokeURL
Revokes an Object URL.
