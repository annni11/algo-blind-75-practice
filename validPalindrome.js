//~ was trying to do it without regex but .... done oct 12

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  //string lowercase
  let str = s.toLocaleLowerCase().replace(/[_\W]/g, '');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
