import impname from './image1.jpg';// import image first then we can access  the data usnig impname given
function Imageupdate(){

 Image="https://www.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=192&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";
    
  return (
        <>
        <h5>image is in public folder we can access--img src='./image1.jpg' alt="hello"  </h5>
        <img src='./image1.jpg' alt="hello" />
        {/* image is been accised from public folder directly */}
        <h4>image in src then we can use by importing the image </h4>
        <h6>img src={impname} alt="hello"</h6>
        <img src={impname} alt="hello" />
      
        </>
    )
}
export default Imageupdate;