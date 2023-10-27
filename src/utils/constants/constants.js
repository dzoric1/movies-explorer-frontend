const REGEX_EMAIL = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';

const MOVIES_PER_PAGE_1280 = { initial: 12, step: 3 };
const MOVIES_PER_PAGE_768 = { initial: 8, step: 2 };
const MOVIES_PER_PAGE_320 = { initial: 5, step: 1 };
const SHORT_MOVIES_DURATION = 40;

export {
  REGEX_EMAIL,
  SHORT_MOVIES_DURATION,
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_768,
  MOVIES_PER_PAGE_320
};