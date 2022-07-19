import React from "react";

// 전개 연산자(Spread Operator) : 모양은 ... 이렇게 생김
// 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제하거나 옮길 때 사용.

// 배열 조합
const SpreadOperator = () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const arrWrap = arr1.concat(arr2, arr3);
  const spread = [...arr1, ...arr2, ...arr3];

  console.log("arrWrap", arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log("spread사용", spread); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  arr1.push(...arr2);
  console.log("arr2푸쉬", arr1);

  // 객체 조합
  const obj1 = {
    a: "A",
    b: "B",
  };
  const obj2 = {
    c: "C",
    d: "D",
  };
  const objWrap = { obj1, obj2 };
  console.log("objWrap", objWrap); // 이렇게 하면 객체안에 객체 자체가 들어감

  const obj3 = {
    a: "A",
    b: "B",
  };
  const obj4 = {
    c: "C",
    d: "D",
  };
  const objSpread = { ...obj3, ...obj4 };
  console.log("objSpread", objSpread); // 객체 자체가 아닌 값만 할당됨

  // 기존 배열 보존
  const arr11 = [1, 2, 3];
  const arr22 = [...arr11].reverse();

  console.log("원본 배열 유지", arr11);
  console.log("spread사용하여 값변경", arr22);

  return <div>Spread Operator</div>;
};

export default SpreadOperator;
