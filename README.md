# Node + gRPC + TS example

### ISSUES:

1. While Running proto:gen you might get issue of `sh: ./proto/build.sh: Permission denied` to resolve that

```sh
chmod +x ./proto/build.sh
```

2. For Web, we need to download protobuf compiler, refer to the Article for installation [here](https://google.github.io/proto-lens/installing-protoc.html)

3. After the client build, you'll face the issue of

```js
// POST http://localhost:3000/${SERVICE}/${METHOD} net::ERR_INVALID_HTTP_RESPONSE
```

To make requests to a gRPC service from a browser, you'll need to use gRPC-Web, which is a variant of gRPC that's designed to work over HTTP/1.1 and HTTP/2. You'll also need a proxy to translate between gRPC-Web requests and gRPC responses. Envoy is a popular proxy for this purpose.

4. Issues to handle when using grpc, falsy values such as `false`, `0`, etc. are passed as null
