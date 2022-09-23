import { Carousel, Image, Col, Row } from 'antd';
import React from 'react';
// const contentStyle = {
//   height: '500px',
//   color: 'red',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: 'green',
// };

const HomeComponent = () => {
  return (
    <>
    <div style={{ height: "", width: "1100px", margin: 'auto' }}>
      <Carousel autoplay>
        <div>
          <h3>
            <Image src="school1.jpg" style={{ height: "100%", width: "100%" }} />
          </h3>
        </div>
        <div>
          <h3 >
            <Image src="school2.jpg" style={{ height: "100%", width: "100%" }} />
          </h3>
        </div>
        <div>
          <h3 >
            <Image src="school1.jpg" style={{ height: "100%", width: "100%" }} />
          </h3>
        </div>
        <div>
          <h3>
            <Image src="school2.jpg" style={{ height: "100%", width: "100%" }} />
          </h3>
        </div>
      </Carousel>
    </div>
<div>
<Row>
      <Col span={8}>
      <div style={{height:"300px",width:"300px",border:""}}>
        <div style={{height:"150px",width:"150px",border:"",borderRadius:"50%",margin:"auto"}}>
        <Image src="activity.jpg" style={{ height: "100%", width: "100%",borderRadius:"50%" }} />
        </div>
        <h1 style={{textAlign:"center",paddingTop:"",fontFamily: 'Lato'}}>Music Class</h1>
        <p style={{textAlign:"center"}}>
        Decor ostdcaer urabitur ultrices posuere<br></br>
         mattis. Nam ullamcorper, diam sit amet<br></br> 
         euismod pelleontesque, eros risus rhoncus <br></br>
         libero, invest tibulum nisl ligula
        </p>
      </div>
      </Col>
      <Col span={8}>
      <div style={{height:"300px",width:"300px",border:""}}>
        <div style={{height:"150px",width:"150px",border:"",borderRadius:"50%",margin:"auto"}}>
        <Image src="music.jpg" style={{ height: "100%", width: "100%",borderRadius:"50%" }} />

        </div>
        <h1 style={{textAlign:"center",paddingTop:"",fontFamily: 'Lato'}}>Active Learning</h1>
        <p style={{textAlign:"center"}}>
        Decor ostdcaer urabitur ultrices posuere<br></br>
         mattis. Nam ullamcorper, diam sit amet<br></br> 
         euismod pelleontesque, eros risus rhoncus <br></br>
         libero, invest tibulum nisl ligula
        </p>
      </div>
      </Col>
      <Col span={8}>
      <div style={{height:"300px",width:"300px",border:""}}>
        <div style={{height:"150px",width:"150px",border:"",borderRadius:"50%",margin:"auto"}}>
        <Image src="yoga.jpg" style={{ height: "100%", width: "100%",borderRadius:"50%" }} />

        </div>
        <h1 style={{textAlign:"center",paddingTop:"",fontFamily: 'Lato'}}>Yoga Class</h1>
        <p style={{textAlign:"center"}}>
        Decor ostdcaer urabitur ultrices posuere<br></br>
         mattis. Nam ullamcorper, diam sit amet<br></br> 
         euismod pelleontesque, eros risus rhoncus <br></br>
         libero, invest tibulum nisl ligula
        </p>
      </div>
      </Col>
    </Row>
</div>
</>
  )

}

export default HomeComponent
