class Service{
    constructor(){
        this.URI = 'http://localhost:3000/'
    }
    async getAll(){
        const response = await  fetch(this.URI);
        const data  = await response.json();
        return data
    }
    async saveData(row){
        
        const res = await fetch(this.URI,{
            method:'POST',
            headers:{
                'Accept':'applications/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(row)
        });
        const data = await res.json();
        console.log(data);
    };
    async delete(id){
        const res = await fetch(`${this.URI}${id}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'delete'
        })
        const data = await res.json();
        console.log(data);
        
    }
    
}
export default Service;