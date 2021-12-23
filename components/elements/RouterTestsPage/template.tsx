import React, { useState } from 'react';
import router from 'next/router';
import { RouterTestsPageWrapper } from './styles';

const RouterTestsPageTemplate: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  console.log('Name: ', name);
  console.log('Date: ', date);
  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    router.push(`/router-tests/params?name=${name}&date=${date}`);
  };
  return (
    <RouterTestsPageWrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="name"
          type="date"
          autoComplete="date"
          required
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
    </RouterTestsPageWrapper>
  );
};

export default RouterTestsPageTemplate;
