import React from 'react';
import Card from './Card';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>

              <Card imgsrc="https://thumbs.dreamstime.com/b/artificial-intelligence-ai-processor-chip-vector-icon-symbol-graphic-design-logo-web-site-social-media-mobile-app-ui-196271701.jpg" title="Artificial Intelligence" text="AI runs future" btnname="Know More" link="/"/>
              <Card imgsrc="https://www.thebalancesmb.com/thmb/opn3cUYAX4Mib7p9DnnFix0b9jE=/3437x2578/smart/filters:no_upscale()/cloud-computing-502462262-5ac1130e119fa800371ba0a8.jpg" title="Cloud Computing" text="Compute Anywhere" btnname="Know More" link="/"/>
              <Card imgsrc="https://myudaipurcity.com/wp-content/uploads/2018/05/Web-Development-Companies-in-Udaipur.jpg" title="Web Development" text="Push Everything on Web" btnname="Know More" link="/"/>
              <Card imgsrc="https://imageio.forbes.com/specials-images/imageserve/62342d7cff3f57f81cc02f75/The-Biggest-Cyber-Security-Risks-In-2022/960x0.jpg?fit=bounds&format=jpg&width=960" title="Cyber Security" text="Secure Your Web" btnname="Know More" link="/"/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;