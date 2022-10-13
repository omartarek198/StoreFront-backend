export function IsValidNumber(x:number):boolean {
    if (isNaN(x))
    {
        return false    
    }

     if (x < 0)
    {
        return false    
    }






    return true
}



export function IsValidString(x:string):boolean {
    if (x === undefined)
    {
        return false    
    }

  


    return true
}