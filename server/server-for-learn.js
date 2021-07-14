const { ESRCH } = require("constants");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h2>HTML Forms</h2>");
    res.write("<form action='/message' method='POST'> ");
    res.write('<label for="fname">First name:</label><br>');
    res.write(' <input type="text" id="fname" name="fname" value=""><br>');
    res.write('<input type="submit" value="Submit">');
    res.write(" </form> ");
    res.write(" </body>");
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    // WE CAN NOT WORK WITH CHUNK BECAUSE IT ....
    req.on("data", (chunk) => {
      console.log("CHUNK", chunk);
      body.push(chunk);
    });
    // NOW WE CAN DO WITH BODY
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(parsedBody);
      fs.writeFileSync("message.txt", message, (err) => {
        console.log(err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

console.log("SERVER RUNNING ON localhost://5000");
server.listen(5000);
