import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET;

const generateToken = (userData) => {
  // return jwt.sign(userData, SECRET_KEY, { expiresIn: "1h" });
};

const verifyToken = async (request) => {
  try {
    const authHeader = await request.headers.get("Authorization");
    const token = (await authHeader) && authHeader.split(" ")[1];
    const auth = await jwt.verify(token, secretKey);
    return auth;
  } catch (error) {
    return;
  }
};

export { generateToken, verifyToken };
