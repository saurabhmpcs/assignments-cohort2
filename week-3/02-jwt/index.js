const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(4);

function signJwt(username, password) {
  usernameResponse = usernameSchema.safeParse(username);
  passwordResponse = passwordSchema.safeParse(password);
  // Your code here
  if (!usernameResponse.success || !passwordResponse) {
    return null;
  }

  const signature = jwt.sign({ username }, jwtPassword);

  return signature;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  const ans = true;

  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = fasle;
  }

  return ans;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
