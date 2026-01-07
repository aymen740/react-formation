
import React from 'react';


import { AnimatePresence, motion } from 'framer-motion';
import { useToggle } from './hooks/useToggle.js'; 

const boxVariants = {
  visible: { x: 0, rotate: 0, opacity: 1 },
  hidden: { x: 100, rotate: 45, opacity: 0 },
};




function App() {
 
    

  const [open, toggle] = useToggle(true);
  const items = open ? [1,2,3,4,5] : [3,2,5,1,4];

  return (
    <div className="container my-4 vstack gap-2">
      <AnimatePresence mode="popLayout">
      {open && <motionBox
    variants={boxVariants}
    animate="visible"
    initial="hidden"
    exit="hidden"
    >1</motionBox>}  
    
      </AnimatePresence>
      <motion.div
     
      >
        {items.map((item) => (
          <motionBox layout key={item}>{item}</motionBox>
        ))}
        
      </motion.div>
      {open ? <Page1/> : <Page2/>}
      <div>
        <button onClick={toggle}>Afficher / Masquer</button>
      </div>
    </div>
  );
}





function Page1() {
  return (
    <div>
      <p>
        lorem ipsum dolr sit amterf djdjsf ddoppalsde laalfghjd afmdbgkl elit ab vbgehu buedvbvburbuvvbuv vzrgzgyv  
        acdqquitino dhdddjd odio sapiente unde velit dndsvnisvsvn dvsvdb sgrsbuv bfuvvbkufv fbudb gebz sdvsgiuzgb  s fvbv
        vsinzvgni finvbndbnbi fnibdbnib fvbnibdfbndib fnbdnbfdsvfbb fnn vbdvvkfu fbukfvdvfg v bsdufd dubb sdbvuzbdvsz bgvbkjz 
      </p>
       <motion.img
      layoutId="image"
      src="https://picsum.photos/id/237/300/200"
      width={300}
      height={200}
      alt=""
      />
       <p>
        lorem ipsum dolr sit amterf djdjsf ddoppalsde laalfghjd afmdbgkl elit ab vbgehu buedvbvburbuvvbuv vzrgzgyv  
        acdqquitino dhdddjd odio sapiente unde velit dndsvnisvsvn dvsvdb sgrsbuv bfuvvbkufv fbudb gebz sdvsgiuzgb  s fvbv
        vsinzvgni finvbndbnbi fnibdbnib fvbnibdfbndib fnbdnbfdsvfbb fnn vbdvvkfu fbukfvdvfg v bsdufd dubb sdbvuzbdvsz bgvbkjz 
      </p>

    </div>
  );
}

function Page2() {
  return (
    <div>
      <motion.img
      layoutId="image"
      src="https://picsum.photos/id/238/300/200"
      width={300}
      height={200}
      alt=""
      />
      <p>
          lorem ipsum dolr sit amterf djdjsf ddoppalsde laalfghjd afmdbgkl elit ab vbgehu buedvbvburbuvvbuv vzrgzgyv  
        acdqquitino dhdddjd odio sapiente unde velit dndsvnisvsvn dvsvdb sgrsbuv bfuvvbkufv fbudb gebz sdvsgiuzgb  s fvbv
        vsinzvgni finvbndbnbi fnibdbnib fvbnibdfbndib fnbdnbfdsvfbb fnn vbdvvkfu fbukfvdvfg v bsdufd dubb sdbvuzbdvsz bgvbkjz
      </p>
    </div>
  )
}

export default App ()
