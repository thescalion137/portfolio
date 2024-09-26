// - Remove duplicate character in string

const str1 = "abcd";
const str2 = "abcd";

// const a = str1.concat(str2).split('').sort()

const rec = (a, ans = "") => {
  if (a.length) {
    const stoa = a.split("");
    const first = stoa.filter((i) => i === a[0]);
    if (first.length > 1) {
      return rec(stoa.filter((m) => m !== a[0]).join(""), ans);
    } else {
      ans += a[0];
      return rec(stoa.filter((m) => m !== a[0]).join(""), ans);
    }
  }
  return ans;
};

const ab = str1 === str2 ? "" : rec(str1 + str2);
console.log(ab);

// ---
const str1 = "abcd";
const str2 = "abcde";
const st = str1.concat(str2);

var arr = st.split("");
str = arr
  .filter((e) => {
    return arr.indexOf(e) === arr.lastIndexOf(e);
  })
  .join("");

console.log(str);
