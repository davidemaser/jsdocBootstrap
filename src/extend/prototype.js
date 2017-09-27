/**
 * @class
 */
FileDownloader = function() {};
/**
 * @type {Boolean}
 */
FileDownloader.prototype.overwrite = false;
/**
 * @type {String}
 */
FileDownloader.prototype.dir = config.dealImagePath;
/**
 * @param {String} url
 * @param {Function} done
 * @param {Object} done.err
 * @param {String} done.file
 */
FileDownloader.prototype.download = function(url, done) {
  //...
};