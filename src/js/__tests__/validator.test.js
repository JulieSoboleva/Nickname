import Validator from '../validator';
import validateUserName from '../validator';

test('check not valid userName', () => {
  const validator = new Validator('_user1234_');
  expect(validator.validateUserName()).toBe(false);
});

test('check valid userName', () => {
  const validator = new Validator('user123_456-69e');
  expect(validator.validateUserName()).toBe(true);
});
