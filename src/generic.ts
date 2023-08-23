// //GENERICS

// const addId =<T extends object> (obj:T) => {
//     let id = Math.floor(Math.random()*100);
//     return {...obj, id};
// }

// // let user = addId({
// //     name:"Tanmoy",
// //     age: 100,
// //     country:"Bangladesh",
// // });

// let user = "Sifat";
// addId(user)

interface APIResponse {
    status: number;
    type:string;
    data: T;
}

const response1: APIResponse<string> ={
    status: 200,
    type: "200",
    data:'test'
}
