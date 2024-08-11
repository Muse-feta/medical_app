
import { decodedToken } from '@/types/types';
import jwt from 'jsonwebtoken';


export const tokenDecoder = (token: string): decodedToken => {
  const decoded = jwt.decode(token) as decodedToken;
  // console.log("decoded", decoded);
  return decoded;
};