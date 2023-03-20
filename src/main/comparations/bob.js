//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const ANSWER_FINE = `Fine. Be that way!`;
export const ANSWER_CALMDOWN = "Calm down, I know what I'm doing!";
export const ANSWER_CHILL_OUT = "Whoa, chill out!";
export const ANSWER_SURE = "Sure.";
export const ANSWER_WHATEVER = "Whatever.";

export const hey = (message) => {
  message = message.trim();
  const regexAZ = /[A-Z]/;
  const regexaz = /[a-z]/;
  const isAllCaps = regexAZ.test(message) && !regexaz.test(message);
  const isQuestion = message[message.length - 1] === "?";
  if (!message) {
    return ANSWER_FINE;
  } else if (isAllCaps && isQuestion) {
    return ANSWER_CALMDOWN;
  } else if (isAllCaps && !isQuestion) {
    return ANSWER_CHILL_OUT;
  } else if (!isAllCaps && isQuestion) {
    return ANSWER_SURE;
  } else {
    return ANSWER_WHATEVER;
  }
};
