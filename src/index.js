export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      const ua = request.headers.get("User-Agent") || "";
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
      if (isMobile) {
        url.pathname = "/mobile.html";
        return env.ASSETS.fetch(new Request(url, request));
      }
    }
    return env.ASSETS.fetch(request);
  }
};
