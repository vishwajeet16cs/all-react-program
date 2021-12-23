import React,{useEffect,useState}from 'react'

const LifeCycleUE = () => {
    const [name,setName]=useState("");
    const [lastname,setLastName]=useState("");
    const [windoWidth,setWindowWidth] = useState(window.innerWidth)
    //window.innerWidth-give width of window

    //On every rnder

    //---------------------------------------
    // useEffect(()=>{
    //     console.log("I re-rendered");
    // })// it will re-render every time 
    //------------------------------------

    //On first render/mount only! -componentDidMount Alternative
    
    //On first render + whenever dependancy changes!-
    // componentDidUpdate Alternative
    //here when ever name change it will re-render
    //---------------------------------------------
    // useEffect(()=>{
        //     console.log(`The name changed!: ${name}`);
        // },[name]);// only change when name change 
        //----------------------------------------------
        
        //follows the same rules, except this handles the unmounting on a component !- componentWillUnmount Alternative
        //cline out function 
        //----------------------------------------
        // useEffect(()=>{
            //     console.log(`The name changed!: ${name}`);
            //     return ()=>{
                //         //cleanup....
                //         console.log("we unmounted"); 
                //     };
                // });
                //----------------------------------------
                
    useEffect(()=>{
        console.log('attach listener')
        window.addEventListener("resize",updateWindowWidth); 
        return ()=>{
            console.log('detach listner')
            window.removeEventListener("resize",updateWindowWidth);
        }
    },[])
    //using clean up function we can stop unwanted rerandering
     
    const updateWindowWidth=()=>{
        setWindowWidth(window.innerWidth);
    }

    return (
        <div>
            <div>
                <center>
                    <h1>The UseEffect Hook</h1>
                    <h2>The window with is:{windoWidth}</h2>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter a name' />
                    <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter a name' />
                </center>
            </div>
        </div>
    )
}

export default  LifeCycleUE
