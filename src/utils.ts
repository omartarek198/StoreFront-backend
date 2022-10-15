import bcrypt from "bcrypt";
import express, { Request, Response } from "express";

import jwt from "jsonwebtoken";
export function IsValidNumber(x: number): boolean {
  if (isNaN(x)) {
    return false;
  }

  if (x < 0) {
    return false;
  }

  return true;
}

export function IsValidString(x: string): boolean {
  if (x === undefined) {
    return false;
  }

  return true;
}

export function hash(x: string): string {
  const pepper = process.env.BCRYPT_PASSWORD;
  const hashed = bcrypt.hashSync(
    x + pepper,
    parseInt(process.env.SALT_ROUNDS as string)
  );

  return hashed;
}


export function validate(_req:Request, res:Response):Boolean
{
    try {



    const authorizationHeader = _req.headers.authorization as string
    


    const token = authorizationHeader.split(' ')[1]

    jwt.verify(token, process.env.TOKEN_SECRET as string) 


  } catch (err) {
    res.status(401);
    res.json(`invalid token ${err}`);
    return false;
    }
  
  
  return true
}