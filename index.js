addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    let url = new URL(request.url);
    url.hostname = "shadow-illusion.com";  // Site real

    let modifiedRequest = new Request(url, request);
    modifiedRequest.headers.set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36");

    return fetch(modifiedRequest);
}
