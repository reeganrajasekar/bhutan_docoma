import { useState,useEffect } from 'react';

function Got(props){

    return(
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2" data-aos={"zoom-in"}>
                <div className="card" style={{borderRadius:"10px",border:"1px solid #4AB80A",boxShadow:"1px 1px 3px #aaa"}}>
                    <div style={{padding:"10px"}} className="row">
                        <div className="col-2">
                            <p style={{fontSize:"18px",fontWeight:"600",color:"#4AB80A"}}>1<sup>st</sup></p>
                        </div>
                        <div className="col-10">
                            <p style={{fontSize:"22px",fontWeight:"600",color:"#444"}}>{props.code1}</p>
                            <span style={{color:"#666",fontSize:"18px"}}>Prize : ₹49000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2" data-aos={"zoom-in"}>
                <div className="card" style={{borderRadius:"10px",border:"1px solid #4AB80A",boxShadow:"1px 1px 3px #aaa"}}>
                    <div style={{padding:"10px"}} className="row">
                        <div className="col-2">
                            <p style={{fontSize:"18px",fontWeight:"600",color:"#4AB80A"}}>2<sup>nd</sup></p>
                        </div>
                        <div className="col-10">
                            <p style={{fontSize:"22px",fontWeight:"600",color:"#444"}}>{props.code2}</p>
                            <span style={{color:"#666",fontSize:"18px"}}>Prize : ₹35000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-2" data-aos={"zoom-in"}>
                <div className="card" style={{borderRadius:"10px",border:"1px solid #4AB80A",boxShadow:"1px 1px 3px #aaa"}}>
                    <div style={{padding:"10px"}} className="row">
                        <div className="col-2">
                            <p style={{fontSize:"18px",fontWeight:"600",color:"#4AB80A"}}>3<sup>rd</sup></p>
                        </div>
                        <div className="col-10">
                            <p style={{fontSize:"22px",fontWeight:"600",color:"#444"}}>{props.code3}</p>
                            <span style={{color:"#666",fontSize:"18px"}}>Prize : ₹20000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-2" data-aos={"zoom-in"}>
                <div className="card" style={{borderRadius:"10px",boxShadow:"1px 1px 3px #aaa"}}>
                    <div style={{padding:"10px"}} className="row">
                        <div className="col-2">
                            <p style={{fontSize:"18px",fontWeight:"600",color:"#4AB80A"}}>4<sup>th</sup></p>
                        </div>
                        <div className="col-10">
                            <p style={{fontSize:"22px",fontWeight:"600",color:"#444"}}>{props.code4}</p>
                            <span style={{color:"#666",fontSize:"18px"}}>Prize : ₹2000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-2 mb-2" data-aos={"zoom-in"}>
                <div className="card" style={{borderRadius:"10px",boxShadow:"1px 1px 3px #aaa"}}>
                    <div style={{padding:"10px"}} className="row">
                        <div className="col-2">
                            <p style={{fontSize:"18px",fontWeight:"600",color:"#4AB80A"}}>5<sup>th</sup></p>
                        </div>
                        <div className="col-10">
                            <p style={{fontSize:"22px",fontWeight:"600",color:"#444"}}>{props.code5}</p>
                            <span style={{color:"#666",fontSize:"18px"}}>Prize : ₹100</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Result(){
    const [six,setSix] = useState()
    const [nine,setNine] = useState()
    const [tw,setTw] = useState()
    const [code1,setCode1] = useState("")
    const [code2,setCode2] = useState("")
    const [code3,setCode3] = useState("")
    const [code4,setCode4] = useState("")
    const [code5,setCode5] = useState("")
    const [today,setToday] = useState()
    useEffect(() => {
        function mine(){
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            setToday(dd + '-' + mm + '-' + yyyy)
            fetch('/api?date='+yyyy + '-' + mm + '-' + dd)
            .then((response) => response.json())
            .then((data) => {
                if(data[0]){
                    setCode1("Result Not Published !")
                    data.map((i)=>{
                        if(i.place == "9"){
                            setTw(i)
                            setCode1(i.code1)
                            setCode2(i.code2)
                            setCode3(i.code3)
                            setCode4(i.code4)
                            setCode5(i.code5)
                        }else if(i.place=="1"){
                            setSix(i)
                        }else if(i.place=="8"){
                            setNine(i)
                        }else{
                            setCode1("Result Not Published !")
                        }
                    })
                }else{
                    setCode1("Result Not Published !")
                }
                document.getElementById('loader').style.display='none'
            })
            .catch((error) => {
                console.error(error);
            });
        }
        mine();
    },[]);

    function click12() {
        document.getElementById("btn12").classList.add("resultActive")
        document.getElementById("btn6").classList.remove("resultActive")
        document.getElementById("btn9").classList.remove("resultActive")
        if(tw){
            setCode1(tw.code1)
            setCode2(tw.code2)
            setCode3(tw.code3)
            setCode4(tw.code4)
            setCode5(tw.code5)
        }else{
            setCode1("Result Not Published !")
        }
    }

    function click6() {
        document.getElementById("btn12").classList.remove("resultActive")
        document.getElementById("btn6").classList.add("resultActive")
        document.getElementById("btn9").classList.remove("resultActive")
        if(six){
            setCode1(six.code1)
            setCode2(six.code2)
            setCode3(six.code3)
            setCode4(six.code4)
            setCode5(six.code5)
        }else{
            setCode1("Result Not Published !")
        }
    }

    function click9() {
        document.getElementById("btn12").classList.remove("resultActive")
        document.getElementById("btn6").classList.remove("resultActive")
        document.getElementById("btn9").classList.add("resultActive")
        if(nine){
            setCode1(nine.code1)
            setCode2(nine.code2)
            setCode3(nine.code3)
            setCode4(nine.code4)
            setCode5(nine.code5)
        }else{
            setCode1("Result Not Published !")
        }
    }

    return(
        <>
            <h4 className="mt-4 mb-3" style={{textDecoration:"underline",textAlign:"center",fontWeight:"700",color:"#4AB80A",textShadow:"0px 1px 2px #4AB80A",fontSize:"22px"}}>Today - {today}</h4>
            <div className="container mt-2 mb-2" style={{position:"relative"}}>
                <div id="loader" style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"#ffffffcc",zIndex:"10000",top:"0px",display:"block"}}>
                    <div className="spinner-border" style={{color:"#4AB80A",position:"absolute",top:"50%",left:"47%"}} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
                <div className="container pt-3 pb-3" style={{backgroundColor:"#f5f5f5",borderRadius:"15px",boxShadow:"1px 2px 3px #aaa"}}>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                        <button className="result resultActive w-100" id="btn12" onClick={()=>click12()}>9 am</button>
                        <button className="result w-100" id="btn6" onClick={()=>click6()}>1 pm</button>
                        <button className="result w-100" id="btn9" onClick={()=>click9()}>8 pm</button>
                    </div>
                    <hr />
                    <div className="container" style={{transition: "all 0.2s ease-out",minHeight:"230px"}}>
                        {code1=="Result Not Published !"?<h4 className='pt-2 pb-2' style={{color:"#aaa",textAlign:"center"}}>Result Not Published !</h4>:<Got code1={code1} code2={code2} code3={code3} code4={code4} code5={code5}/>}
                    </div>
                    <div className="mt-2" style={{display:"flex",justifyContent:"flex-end"}}>
                        <a className="btn btn-secondary" style={{backgroundColor:"#aaa",border:"none"}} href="/result.html">Past Results</a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Result;