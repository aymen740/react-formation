
/**"
 * 
 * @param {boolean} initial 
 */

import  { useState } from "react";

 export function  useToggle (initial = false) {
  const [state, setState] = useState(true);
  
  const toggle = () => setState(v => !v)
  return [state, toggle]
}