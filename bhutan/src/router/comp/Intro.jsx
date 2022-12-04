import bg from "../assets/bg.png"

function Intro() {
  return (
    <div className="mb-3" style={{background:`url(${bg})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"",backgroundSize:"cover"}}>
      <h4 className="mb-2 pt-4" style={{textAlign:"center",fontWeight:"700",color:"#666666",textShadow:"0px 1px 2px #000",fontSize:"32px"}}>Welcome to Bhutan Docoma</h4>
      
      <div className="container" data-aos={"zoom-in"}>
        <div style={{display:"flex",justifyContent:"center"}}>
          <div className="row">
            <div className="col-6 mt-2 mb-2">
              <div className="card" style={{borderRadius:"10px",border:"1px solid #FCE9CC",boxShadow:"1px 1px 3px #aaa"}}>
                <div style={{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <p style={{fontSize:"22px",fontWeight:"500",color:"#666"}}>1<sup>st</sup> Prize</p>
                  <span style={{color:"gray",fontSize:"22px",fontWeight:"600",textShadow:"0px 2px 2px #666"}}>₹49000</span>
                </div>
              </div>
            </div>

            <div className="col-6 mt-2 mb-2">
              <div className="card" style={{borderRadius:"10px",border:"1px solid #FCE9CC",boxShadow:"1px 1px 3px #aaa"}}>
                <div style={{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <p style={{fontSize:"22px",fontWeight:"500",color:"#666"}}>2<sup>nd</sup> Prize</p>
                  <span style={{color:"gray",fontSize:"22px",fontWeight:"600",textShadow:"0px 2px 2px #666"}}>₹35000</span>
                </div>
              </div>
            </div>

            <div className="col-4 mt-2 mb-2">
              <div className="card" style={{borderRadius:"10px",border:"1px solid #FCE9CC",boxShadow:"1px 1px 3px #aaa"}}>
                <div style={{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <p style={{fontSize:"18px",fontWeight:"500",color:"#666"}}>3<sup>rd</sup> Prize</p>
                  <span style={{color:"gray",fontSize:"22px",fontWeight:"600",textShadow:"0px 2px 2px #666"}}>₹20000</span>
                </div>
              </div>
            </div>

            <div className="col-4 mt-2 mb-2">
              <div className="card" style={{borderRadius:"10px",border:"1px solid #FCE9CC",boxShadow:"1px 1px 3px #aaa"}}>
                <div style={{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <p style={{fontSize:"18px",fontWeight:"500",color:"#666"}}>4<sup>th</sup> Prize</p>
                  <span style={{color:"gray",fontSize:"22px",fontWeight:"600",textShadow:"0px 2px 2px #666"}}>₹2000</span>
                </div>
              </div>
            </div>


            <div className="col-4 mt-2 mb-2">
              <div className="card" style={{borderRadius:"10px",border:"1px solid #FCE9CC",boxShadow:"1px 1px 3px #aaa"}}>
                <div style={{padding:"15px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <p style={{fontSize:"18px",fontWeight:"500",color:"#666"}}>5<sup>th</sup> Prize</p>
                  <span style={{color:"gray",fontSize:"22px",fontWeight:"600",textShadow:"0px 2px 2px #666"}}>₹100</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <p className="pb-3" style={{fontSize:"20px",color:"#555555",textAlign:"center",fontWeight:"bolder"}}>
          Now's your chance to win! You can win in our prize draws. Will you be our next lucky winner?
        </p>
      </div>
    </div>
  );
}

export default Intro;