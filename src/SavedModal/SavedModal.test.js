import SavedModal from './index.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { filteredImage1 } from '../sampleData';

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

  it('should render correctly', () => {
    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
    const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
    const date = screen.getByText('2021-01-17');
    const explanation = screen.getByText('The jets are over a million light years long.');

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });

  it('should have an icon that closes modal when clicked', () => {
    const close = screen.getByTestId('close-saved-modal');
    
    userEvent.click(close);

    expect(mockCloseModal).toHaveBeenCalled();
  });
});