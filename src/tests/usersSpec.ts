import { User } from "../models/users";


const user = new User()


describe("testing user CRUD", () => {
     it('has an index method', () => {
    expect(user.index).toBeDefined();
     });
    
     it('has a create method', () => {
    expect(user.create).toBeDefined();
     });
    
     it('has a update method', () => {
    expect(user.update).toBeDefined();
     });
    
     it('has a delete method', () => {
    expect(user.delete).toBeDefined();
    });
    
    it("expect index() to equal [] ", async() => {
        expect(await user.index()).toEqual([]);
    });


    it("expect create(user_fn,user_ln,user_pwd) to equal [user_fn,user_ln,user_pwd] ", async () => {
           
        const created_obj:any = await user.create("user_fn", "user_ln", "user_pwd")
        

        

        expect(created_obj).toEqual([{
          
    id: 1,
    firstname: 'user_fn',
    lastname: 'user_ln',
    pwd: 'user_pwd'
  }]
    );
    });

       it("expect show(id) to equal [user_fn,user_ln,user_pwd] ", async () => {
           
        const selected_obj:any = await user.show(1)
        

        

        expect(selected_obj).toEqual([{
          
    id: 1,
    firstname: 'user_fn',
    lastname: 'user_ln',
    pwd: 'user_pwd'
  }]
    );
    });
          it("expect update() to equal [user_fn,user_ln,newPwd] ", async () => {
           
        const updated_obj:any = await user.update("user_fn","user_ln","newPwd")
        

        

        expect(updated_obj).toEqual([{
          
    id: 1,
    firstname: 'user_fn',
    lastname: 'user_ln',
    pwd: 'newPwd'
  }]
    );
          });
    
    it("expect delete() to equal [user_fn,user_ln,newPwd] ", async () => {
           
        let deleted_obj:any = await user.delete(1)
        

        

        expect(deleted_obj).toEqual([{
          
    id: 1,
    firstname: 'user_fn',
    lastname: 'user_ln',
    pwd: 'newPwd'
  }]
    );
    });
});


 