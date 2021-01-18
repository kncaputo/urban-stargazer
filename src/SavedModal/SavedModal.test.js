
import { act, render, screen, fireEvent } from '@testing-library/react';
import Saved from './index.jsx';
import { saveToLocalStorage } from '../utilities';
import { image1, image2, filteredImage1, filteredImage2 } from '../sampleData';
import '@testing-library/jest-dom';
jest.mock('../utilities');
