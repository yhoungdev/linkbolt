const jwt = require('jsonwebtoken');

interface IToken <T> {
    data: T
}

export const  signJwt = <T>({data}: IToken<T>) => {
  const sign = jwt.sign(data, process.env.JWT_KEY);
  return sign;
}