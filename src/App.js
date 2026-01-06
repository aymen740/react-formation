import {createPortal} from "react-dom";



  


function App() {
return <div style={{
  height: 300,
  overflow: 'scroll',
  background: ' #EEE',
  margin: 20,
  position: 'relative'
}}>
<p>
  gfhhheb ghhhn lorzas fngnfff gnfffqv fhthzbqsqffdbd dhtgn
  ddnn gnyy nnffngpogfzg rgzgzp iggpzg brigzgizgngbnrbzigzgznrg
  gernienrig fignegenz rnbn bn bzngznilg bnzrg bnizzgnizpgzn z zrnibzr
</p>
<p>
  gfhhheb ghhhn lorzas fngnfff gnfffqv fhthzbqsqffdbd dhtgn
  ddnn gnyy nnffngpogfzg rgzgzp iggpzg brigzgizgngbnrbzigzgznrg
  gernienrig fignegenz rnbn bn bzngznilg bnzrg bnizzgnizpgzn z zrnibzr
</p>
<p>
  gfhhheb ghhhn lorzas fngnfff gnfffqv fhthzbqsqffdbd dhtgn
  ddnn gnyy nnffngpogfzg rgzgzp iggpzg brigzgizgngbnrbzigzgznrg
  gernienrig fignegenz rnbn bn bzngznilg bnzrg bnizzgnizpgzn z zrnibzr
</p>
<Modal />



</div>

 
}
function Modal () {
  return createPortal(<div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    border: 'solid 1px grey',
    background: '#FFF'
  }}>
    je suis une modale 
  </div>, document.body)
}
 