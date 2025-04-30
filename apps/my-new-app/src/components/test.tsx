'use client';
import { exampleFunction } from '@org/my-new-lib';
import { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    exampleFunction();
  }, []);

  return <p>Hai brother</p>;
};

export default TestComponent;
