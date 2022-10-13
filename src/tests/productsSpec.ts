import { Product } from "../models/products";


const product = new Product()
product.set("p1","tech",1200)

describe("testing product CRUD", () => {
     it('has an index method', () => {
    expect(product.index).toBeDefined();
     });
    
     it('has a create method', () => {
    expect(product.create).toBeDefined();
     });
    
     it('has a update method', () => {
    expect(product.update).toBeDefined();
     });
    
     it('has a delete method', () => {
    expect(product.delete).toBeDefined();
    });
    
    it("expect index() to equal [] ", async() => {
        expect(await product.index()).toEqual([]);
    });


    it("expect create(product_fn,product_ln,product_category) to equal [product_fn,product_ln,product_category] ", async () => {
           
        const created_obj:any = await product.create()
        

        

        expect(created_obj).toEqual([{
          
    id: 1,
    name: 'p1',
    price: '1200',
    category: "tech"
  }]
    );
    });

       it("expect show(id) to equal [product_fn,product_ln,product_category] ", async () => {
           
        const selected_obj:any = await product.show(1)
        

        

        expect(selected_obj).toEqual([{
          
    id: 1,
    name: 'p1',
    price: '1200',
    category: 'tech'
  }]
    );
    });
          it("expect update() to equal [product_fn,product_ln,newcategory] ", async () => {
           
              
              product.set("p1","food",50)
        const updated_obj:any = await product.update(1)
        

        

        expect(updated_obj).toEqual([{
          
    id: 1,
    name: 'p1',
    price: '50',
    category: 'food'
  }]
    );
          });
    
    it("expect delete() to equal [product_fn,product_ln,newcategory] ", async () => {
           
        let deleted_obj:any = await product.delete(1)
        

        

        expect(deleted_obj).toEqual([{
          
    id: 1,
    name: 'p1',
    price: '50',
    category: 'food'
  }]
    );
    });
});


 