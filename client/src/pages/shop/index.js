const head = {
    data: 'hello', // 
    next: {
      data: 'world', // 
      next: {
        data: '!', // 
        next: {
          data: 'foo',
          next: {
            data: 'other',
            next: null,
          }
        }
      }
    }
  }
  
  
//Random access of data elements is not allowed. 
//Nodes must be accessed sequentially starting from the first one. 
//Therefore, search operation is slow on a linked list.
let current = head;

while(current.next !== null){
    current = current.next;
    console.log(current.data)
}
