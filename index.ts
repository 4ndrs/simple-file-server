Bun.serve({
  fetch: async (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/get") {
      const ivy = await Bun.file("ivy.jpg").arrayBuffer();

      return new Response(ivy, {
        headers: {
          "Content-Type": "image/jpeg",
        },
      });
    }

    if (url.pathname === "/post") {
      const data = await req.arrayBuffer();

      console.log(req.headers.get("Content-Type"));

      Bun.write("output.jpg", data);

      return new Response("200");
    }

    return new Response("404");
  },
});
