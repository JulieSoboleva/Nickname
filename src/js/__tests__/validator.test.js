import Validator from '../validator';

test('Проверить вариант с цифрой в начале', () => {
  const validator = new Validator('1user');
  expect(validator.validateUserName()).toBe(false);
});

test('Проверить вариант с цифрой в конце', () => {
  const validator = new Validator('user2');
  expect(validator.validateUserName()).toBe(false);
});

test('Проверить вариант с - в начале слова', () => {
  const validator = new Validator('-user');
expect(validator.validateUserName()).toBe(false);
});

test('Проверить вариант с - в конце в слова', () => {
  const validator = new Validator('user-');
expect(validator.validateUserName()).toBe(false);
});

test('Проверить вариант с _ в начале слова', () => {
  const validator = new Validator('_user');
expect(validator.validateUserName()).toBe(false);
});
test('Проверить вариант с _ в конце слова', () => {
  const validator = new Validator('user_');
expect(validator.validateUserName()).toBe(false);
});
test('Проверить вариант с 4-мя цифрами подряд в середине слова', () => {
  const validator = new Validator('user1234user');
expect(validator.validateUserName()).toBe(false);
});

test('Проверить вариант c - в середине слова', () => {
  const validator = new Validator('user123-69e');
  expect(validator.validateUserName()).toBe(true);
});

test('Проверить вариант с _ в середине слова', () => {
  const validator = new Validator('user987_7f');
  expect(validator.validateUserName()).toBe(true);
});

test('Проверить вариант с 3-мя цифрами подряд в середине слова', () => {
  const validator = new Validator('user123user');
  expect(validator.validateUserName()).toBe(true);
});


