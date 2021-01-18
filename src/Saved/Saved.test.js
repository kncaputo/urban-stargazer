import Saved from './index.jsx';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { filteredImage1, filteredImage2 } from '../sampleData';
import userEvent from '@testing-library/user-event';
jest.mock('../utilities');

describe('Saved', () => {
  const mockSavedImages = [filteredImage1, filteredImage2];
  const mockStringifyedImages = JSON.stringify(mockSavedImages);

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (() => mockStringifyedImages),
    },
    writable: true
  });

  beforeEach(async () => {

    await act(async () => { 
      render(
        <Saved />
      );
    });
  });

  it('should display saved image card', () => {
    const img1Card = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
    const img2Card = screen.getByAltText('Saturn Rings');

    expect(img1Card).toBeInTheDocument();
    expect(img2Card).toBeInTheDocument();
  });

it('should open a modal displaying larger full-size and image details when a card is clicked', () => {
    const img1Card = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
      
    userEvent.click(img1Card)

    const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
    const date = screen.getByText('2021-01-17');
    const explanation = screen.getByText('The jets are over a million light years long.');

    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });
});