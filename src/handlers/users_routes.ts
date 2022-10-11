import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { User, User_CRUD } from '../models/users'
import jwt from 'jsonwebtoken'
const usrs_crud = new User_CRUD()
const index = async (_req: Request, res: Response) => {
    const all_users = await usrs_crud.index()

    res.json(all_users)
}


const user_routes = (app: express.Application) => {
    app.get('/users', index)
    app.post('/users/insert', addUsr)
    
}



const addUsr = async (_req: Request, res: Response) => {


    const fn = _req.query.fn as string
    const ln = _req.query.ln as string
    const pwd = _req.query.pwd as string
    
    try {

        console.log(fn)
        console.log(ln)
        console.log(pwd)


        const added_usr = await usrs_crud.insert(fn, ln, pwd)
        var token = jwt.sign({ user: added_usr }, process.env.TOKEN_SECRET as string);
         console.log(token)
    res.json(added_usr)
    } catch (err)
    {
        console.log(err)
        res.status(400)
        res.json(err)
    }

}

export default user_routes