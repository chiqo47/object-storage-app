// export function bytesToSize(bytes) {
//    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
//    if (bytes == 0) return '0 Byte'
//    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
//    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
// }

export function bytesToSize(bytes, decimals = 1) {
  if (!bytes) return 0

    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(decimals) + ' ' + sizes[i];
}
