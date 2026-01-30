import { renderHook, act } from '@testing-library/react';
import useIncrement from '../src/hooks/useIncrement'; // adapte le chemin si nécessaire

describe('useIncrement', () => {
  it('should use the default value', () => {
    const { result } = renderHook(() => useIncrement());
    expect(result.current[0]).toBe(0); // valeur par défaut attendue
  });

  it('should increment the value', () => {
    const { result } = renderHook(() => useIncrement());
    act(() => {
      result.current[1](); // appelle la fonction d’incrémentation
    });
    expect(result.current[0]).toBe(1);
  });
});
