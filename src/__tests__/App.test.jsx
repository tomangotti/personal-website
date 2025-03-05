import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  it('renders Thomas Angotti', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const nameElement = screen.getByText(/Thomas Angotti/i);
    expect(nameElement).toBeInTheDocument();
  });
});