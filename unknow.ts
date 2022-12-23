let userInput: unknown;
let userName: string;

userInput = 2;
userInput = 'string';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('anError,', 500);
