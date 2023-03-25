printMessages("message1", function (message) {
  console.log("first script is loaded");

  printMessages("/script2.js", function (message) {
    console.log("second script is loaded");

    printMessages("/script3.js", function (message) {
      console.log("third script is loaded");
      console.log(message)
    });
  });
});
