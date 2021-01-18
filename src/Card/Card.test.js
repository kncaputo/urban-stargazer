import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './index.jsx';
import { image1 } from '../sampleData';
import '@testing-library/jest-dom';

describe('Card', () => {
  beforeEach(() => {
  const { url, title, date } = image1;
    const mockedOpenModal = jest.fn();
  
    render(
      <Card 
        key={date}
        src={`${url}`}
        title={title}
        date={date}
        openModal={mockedOpenModal}
      />  
    );
  });

  it('should render correctly', () => {
    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');

    expect(img).toBeInTheDocument();
  });

  it('should call openModal on click', () => {

  });
});