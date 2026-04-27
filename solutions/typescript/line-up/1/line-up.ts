export function format(name: unknown, number: unknown): unknown {
  let stringVersion: string = ``;
  let postfix: string = ``;
  if (typeof number === `number`) {
    stringVersion = number.toString();
    postfix = stringVersion[stringVersion.length - 1];
  }
  if (postfix === `1` && stringVersion !== `11`) {
    postfix = `${stringVersion}st`;
  } else if (postfix === `2` && stringVersion !== `12`  && stringVersion !== `112`) {
    postfix = `${stringVersion}nd`;
  } else if (postfix === `3` && stringVersion !== `13`) {
    postfix = `${stringVersion}rd`;
  } else {
    postfix = `${stringVersion}th`;
  }

  return `${name}, you are the ${postfix} customer we serve today. Thank you!`;
}