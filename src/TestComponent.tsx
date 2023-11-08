import { Key, useState } from 'react';
 
type Action = { 
  name: string; 
  data: number; 
};

type Test = {
  list: Action[];
}
type Result<K extends string> = Record<K, () => number>;

function generate<K extends string>(list : {list: {name : K; data:number}[]}): Result<K> {


  const result= list.list.reduce((acc, { name, data }) => {
    acc[name as K] = () => data;
    return acc;
  }, {} as Result<K>);
  console.log(result)
  return result;
}

const result = generate({
  list: [
    { name: "add", data: 2 },
    { name: "delete", data: 3 },
    { name: "update", data: 4 },
    { name: "checel", data: 1 },
    { name: "checel2", data: 1 },
  ],
});
console.log(result.add())

// type Result<K extends string> = Record<K, () => number>;

// function generate<K extends string>(test: Test): Result<K> {
//   const list = test.list ?? [];
//   const result: Result<K>= {} as Result<K>;

//   list.forEach((action) => {
//     result[action.name as K] = () => action.data;
//   });

//   return result;
// }
// const result = generate({
//   list: [
//     { name: "add", data: 2 },
//     { name: "delete", data: 3 },
//     { name: "update", data: 4 },
//     { name: "checel", data: 1 },
//     { name: "checel2", data: 1 },
//   ],
// });
// console.log(result.add())

export default function TestComponent() {
  return (
    <>
      <h1> Page </h1>
    </>
  );
}
