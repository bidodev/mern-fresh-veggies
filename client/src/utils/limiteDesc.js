export const limitResults = (str, limit) => {
    const res = [];
  
    if (str.length > limit) {
      str.split(" ").reduce((acc, cur) => {
        if (acc + cur.length < limit) {
          res.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${res.join(" ")}...`;
    }
    return str;
  };