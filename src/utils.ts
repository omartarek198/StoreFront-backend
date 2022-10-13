import bcrypt from 'bcrypt'


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

export function hash(x:string):string
{
      const pepper = process.env.BCRYPT_PASSWORD;
    const hashed = bcrypt.hashSync(
      x + pepper,
      parseInt(process.env.SALT_ROUNDS as string)
    );
  
  
  return hashed
}
