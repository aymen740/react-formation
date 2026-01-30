import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../src/components/Alert'; // adapte le chemin si nécessaire

test('affiche le message d’alerte', () => {
  render(<Alert message="Erreur critique" />);
  const alertElement = screen.getByText(/erreur critique/i);
  expect(alertElement).toBeInTheDocument();
});
