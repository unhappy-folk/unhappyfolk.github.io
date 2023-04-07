type Predicate<T> = (item: T) => boolean;

const and =
  <T>(predicate1: Predicate<T>) =>
  (predicate2: Predicate<T>) =>
  (item: T) =>
    predicate1(item) && predicate2(item);

const or =
  <T>(predicate1: Predicate<T>) =>
  (predicate2: Predicate<T>) =>
  (item: T) =>
    predicate1(item) || predicate2(item);

const not =
  <T>(predicate: Predicate<T>) =>
  (item: T) =>
    !predicate(item);

export { Predicate, and, or, not };
