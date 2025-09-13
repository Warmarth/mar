type litral =
  | "Sure."
  | "Whoa, chill out!"
  | "Calm down, I know what I'm doing!"
  | "Fine. Be that way!"
  | "Whatever.";

function isYelling(message: string) {
  const letters = message.match(/[a-zA-Z]/g);
  return (
    !!letters && letters.every((letter) => letter === letter.toUpperCase())
  );
}

export function hey(messege: string): litral {
  if (typeof messege !== "string")
    throw new Error(" message should be a string");

  const trimmed = messege.trim();

  if (!trimmed) return "Fine. Be that way!";

  const question = trimmed.endsWith("?");
  const yelling = isYelling(trimmed);

  if (question && yelling) return "Calm down, I know what I'm doing!";
  if (question) return "Sure.";
  if (yelling) return "Whoa, chill out!";

  return "Whatever.";
}
