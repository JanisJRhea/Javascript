function change()
{
    let first=new Promise((resolve, reject) => {
        resolve("hello")
    })
    let second=new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("bye");},1000)
            })
            let combined = 
        Promise.all([first, second]);
    return combined;
}
            async function display()
            {
                let data=await change();
                console.log(data);
            }
display()