import App from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fetchPictureFromDate } from '../apiCalls';
import { image1, image2 } from '../sampleData';
import { filterData, saveToLocalStorage } from '../utilities';
jest.mock('../apiCalls');