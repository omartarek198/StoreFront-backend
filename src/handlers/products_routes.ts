import express, { Request, Response } from 'express'


 import { Product } from '../models/products'


const products_crud = new Product();


 const index = async (_req: Request, res: Response) => {
    const all_products = await products_crud.index()

    res.json(all_products)
}


const products_routes = (app: express.Application) => {
    app.get('/products', index)
      app.get('/products/show',showProduct )
    app.post('/products/insert', addProduct)

      app.get('/products/filter',getProductsByCat )
     app.delete('/products/delete', deleteProduct)
}




const showProduct = async (_req: Request, res: Response) => {

    const product = new Product()

 
    const id = Number ( _req.query.id as string)
    
    try
    {

         
         
        
       


     
     const all_products = await  product.show(id)
    res.json( all_products)
    } catch (err)
    {
        console.log(err)
        res.status(400)
        res.json(err)
    }

}

const addProduct = async (_req: Request, res: Response) => {

    const product = new Product()


    const name = _req.query.name as string
    const category = _req.query.category as string
    const price = Number ( _req.query.price as string)
    
    try
    {

        console.log(name)
        console.log(category)
        console.log(price)

        product.set(name, category, price)
        
       


     
    
    res.json( await product.insert())
    } catch (err)
    {
        console.log(err)
        res.status(400)
        res.json(err)
    }

}
 
const deleteProduct = async (_req: Request, res: Response) => {

    const product = new Product()

 
    const id = Number(_req.query.id as string)
    
    try {

         
         
        
       


     
        const deleted_product = await product.delete(id)
        res.json(deleted_product)
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json(err)
    }

}




    const getPopProducts =
        async (_req: Request, res: Response) => {
      
            
            const id = Number(_req.query.id as string)
            const pop_products = await products_crud.popular(id)

            res.json(pop_products)
        }
    
    
    
    
    
    const getProductsByCat =
        async (_req: Request, res: Response) => {
      
            
            const category = _req.query.category as string
            const products = await products_crud.getByCateory(category)

            res.json(products)




        }
export default products_routes;