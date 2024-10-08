import React from 'react'

const Class = () => {
    class Car {
        constructor(name) {
          this.brand = name;
        }
      
        present() {
          return 'I have a ' + this.brand;
        }
      }
      
      class Model extends Car {
        constructor(name, mod) {
          super(name);
          this.model = mod;
        }  
        show() {
          return this.present() + ', it is a ' + this.model
        }
      }
      
      const mycar = new Model("Ford", "Mustang");
    //   document.write(mycar.show());
  return (
    <fieldset className='border-violet-700 border-4'>
    <div>{mycar.show()}</div>
    </fieldset>
  )
}

export default Class