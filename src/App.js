import { forwardRef } from "react";
import {createPortal} from "react-dom";


function App() {
  const [open, toggle] = useToggle(true);
  const items = open ? [1,2,3,4,5] : [3,2,5,1,4];

  return (
    <div className="container my-4 vstack gap-2">
      <Motion.div
      className="hstack gap-2"
      animate={open ? "visible" : "hidden"}
      variants={wrapperVariants}
      >
        {items.map((item) => (
          <MotionBox layout key={item}>{item}</MotionBox>
        ))}
        
      </Motion.div>
      {open ? <Page1/> : <Page2/>}
      <div>
        <button onClick={toggle}>Afficher / Masquer</button>
      </div>
    </div>
  );
}

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

const MotionBox = Motion(Box);

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

