addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

const proxies = [
    '37.156.46.209:8080',
    '170.106.181.226:13001',
    '47.83.192.255:8888',
    '20.13.148.109:8080',
    '43.130.17.84:13001',
    '43.153.116.85:13001',
    '54.94.17.235:3128',
    '43.130.48.92:18088',
    '195.114.209.50:80',
    '49.51.41.61:13001',
    '85.10.199.48:80',
    '49.51.179.85:13001',
    '43.153.46.52:13001',
    '49.51.38.113:13001',
    '179.48.251.190:8082',
    '170.106.168.138:13001',
    '170.106.64.217:13001',
    '193.124.190.224:14262',
    '43.135.153.235:13001',
    '218.75.224.4:3309',
    '81.169.213.169:8888',
    '118.68.114.172:10007',
    '87.248.129.32:80',
    '119.3.113.152:9094',
    '45.129.141.143:3128'
];

async function handleRequest(request) {
    let url = new URL(request.url);
    url.hostname = "shadow-illusion.com";  // Site real

    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];

    let modifiedRequest = new Request(url, request);

    // Configura o proxy
    const proxyUrl = `http://${randomProxy}`;
    const proxyRequest = new Request(proxyUrl, {
        method: modifiedRequest.method,
        headers: modifiedRequest.headers,
        body: modifiedRequest.body,
        redirect: 'follow'
    });

    return fetch(proxyRequest);
}
