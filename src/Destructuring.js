import React from "react";

export default function Destructuring() {
  // 구조 분해 할당 (Destructuring)
  // 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 Javascript 표현식

  // 객체 구조분해 할당
  let obj = {
    accessory: "horn",
    animal: "horse",
    color: "purple",
    hairType: "curly",
  };

  function objAnimal(animalData) {
    let accessory = animalData.accessory;
    let animal = animalData.animal;
    let color = animalData.color;
    let hairType = animalData.hairType;
    console.log("animalData :", accessory, animal, color, hairType);
  }

  function objAnimal2(animalData) {
    let { accessory, animal, color, hairType } = animalData;
    console.log("animalData2 :", accessory, animal, color, hairType);
  }

  objAnimal(obj);
  objAnimal2(obj);

  // 깊게 들어간 구조분해 할당
  let person = {
    name: "Maya",
    age: 30,
    phone: "010-1111-0000",
    address: {
      zipcode: 1234,
      street: "rainbow",
      number: 42,
    },
  };

  // person안에 그리고 address안에 있는 zipcode, street, number만 꺼내옴
  let {
    address: { zipcode, street, number },
  } = person;

  console.log("address :", zipcode, street, number);

  // 배열 구조 분해 할당
  let a, b, rest;
  [a, b] = [10, 20];
  console.log(a);
  console.log(b);
  [a, b, ...rest] = [10, 20, 30, 40, 50];
  console.log("rest", rest);

  const week = ["monday", "tuesday", "wednesday", "thuresday", "friday"];
  const [day1, day2, day3, day4, day5] = week;
  console.log(day1, day2, day3, day4, day5);

  const numbers = [1, 2, 3, 4, 5, 6];
  const [, , three, , five] = numbers;
  console.log("numbers", three); // 3
  console.log("numbers", five); // 5

  const studentDetails = {
    firstName: undefined,
    lastName: "Mary",
  };
  const { firstName: fName = "not given", lastName } = studentDetails;
  console.log(fName); // firstName에 값이 없으면(undefined)이면 not given 출력
  console.log(lastName);

  const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];

  // people의, father는 f로 짓고, name은 n으로 지음, father의 name 가져오기
  for (let {
    name: n,
    family: { father: f },
  } of people) {
    console.log(`Name : ${n}, Father: ${f}`);
  }
  return <div>Destructuring</div>;
}
