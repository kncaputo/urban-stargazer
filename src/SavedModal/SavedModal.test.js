import SavedModal from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { filteredImage1, filteredImage2 } from '../sampleData';

describe('SavedModal', () => {
  let mockCloseModal;
  let mockDeleteSavedImage;

  beforeEach(() => {
    mockCloseModal = jest.fn();
    mockDeleteSavedImage = jest.fn();
  
    render(
      <SavedModal 
        displayImage={filteredImage1}
        closeModal={mockCloseModal}
        deleteSavedImage={mockDeleteSavedImage}
      />
    );
  });

  it('should have an image', () => {
    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
  
    expect(img).toBeInTheDocument();
  });

  it('should have a title', () => {
    const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
  
    expect(title).toBeInTheDocument();
  });

  it('should have a date', () => {
    const date = screen.getByText('2021-01-17');
  
    expect(date).toBeInTheDocument();
  });

  it('should have an explanation', () => {
    const explanation = screen.getByText('The jets are over a million light years long.');
  
    expect(explanation).toBeInTheDocument();
  });

  // it('should have an icon that removes image from \'Saved\' and closes modal when clicked', () => {
  //   const removeFromSaved = screen.getByTestId('remove-saved');
    
  //   fireEvent.click(removeFromSaved);

  //   expect(mockCloseModal).toHaveBeenCalled();
  //   expect(mockDeleteSavedImage).toBeHaveBeenCalled();
  // });

  // it('should have an icon that closes modal when clicked', () => {
   
  
  //   expect().toBeInTheDocument();
  // });


});