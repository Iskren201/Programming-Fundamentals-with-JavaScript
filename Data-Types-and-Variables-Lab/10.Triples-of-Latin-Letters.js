function slove(n) {
  for (let a = "a".charCodeAt(0); a < "a".charCodeAt(0) + n; a++) {
    for (let b = "a".charCodeAt(0); b < "a".charCodeAt(0) + n; b++) {
      for (let c = "a".charCodeAt(0); c < "a".charCodeAt(0) + n; c++) {
        const triple =
          String.fromCharCode(a) +
          String.fromCharCode(b) +
          String.fromCharCode(c);
        console.log(triple);
      }
    }
  }
}

slove(3);
