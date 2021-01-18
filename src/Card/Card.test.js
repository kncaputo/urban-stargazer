import Card from './index.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { image1 } from '../sampleData';

describe('Card', () => {
  let mockedOpenModal;

  beforeEach(() => {
    const { url, title, date } = image1;
    mockedOpenModal = jest.fn();

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

  it('should render correctly with an image', () => {
    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');

    expect(img).toBeInTheDocument();
  });

  it('should call openModal on click', () => {
    const card = screen.getByTestId('card-2021-01-17');
    
    fireEvent.click(card);

    expect(mockedOpenModal).toHaveBeenCalledWith('2021-01-17');
  });
});