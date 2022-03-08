module.exports={
    resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "zlib": false,
        "http": false,
        "https": false,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "path": require.resolve("path-browserify"),
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
    },
}