const jwt = require('jsonwebtoken');


export const  signJwt = (data: {}) => {
  const sign = jwt.sign(data, process.env.JWT_KEY);
  return sign;
}