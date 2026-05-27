import React from 'react';

function ListPerson() {
  const people = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Avid', age: 40 },
    { name: 'Eve', age: 18 },
    { name: 'Frank', age: 18 },
    { name: 'Grace', age: 55 },
    { name: 'Ceidi', age: 20 },
    { name: 'Ivan', age: 25 },
    { name: 'Budy', age: 50 }
  ];

  // Find first teenager
  const firstTeenager = people.find(
    person => person.age >= 13 && person.age <= 19
  );

  // Find all teenagers
  const allTeenagers = people.filter(
    person => person.age >= 10 && person.age <= 20
  );

  // Check every person is teenager
  const everyTeenager = people.every(
    person => person.age >= 10 && person.age <= 20
  );

  // Check any person is teenager
  const anyTeenager = people.some(
    person => person.age >= 10 && person.age <= 20
  );

  return (
    <>
      <h1>1. List of People</h1>

      <div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name} - {person.age} years old
            </li>
          ))}
        </ul>
      </div>

      <h3>2. Find the first teenager</h3>

      <div>
        {firstTeenager ? (
          <p>
            {firstTeenager.name} - {firstTeenager.age} years old
          </p>
        ) : (
          <p>No teenager found.</p>
        )}
      </div>

      <h3>3. Find all teenagers</h3>

      <ul>
        {allTeenagers.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} years old
          </li>
        ))}
      </ul>

      <h3>4. Check if every person is teenager</h3>

      <p>{everyTeenager ? "True" : "False"}</p>

      <h3>5. Check if any person is teenager</h3>

      <p>{anyTeenager ? "True" : "False"}</p>
    </>
  );
}

export default ListPerson;