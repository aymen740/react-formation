import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {useIncrement} from "../src/hooks/useIncrement.js";
import { act } from "react";

describe('useIncrement', () => {
    it('should use the default value', () => {
      const {result} = renderHook(() => useIncrement({base: 5})  
    )
    act(() => result.current.increment())
   
    expect(result.current.count).toBe(6)
})
})