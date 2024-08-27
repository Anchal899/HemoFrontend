
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import blood1 from "../../assets/donation/blood5.jpg"
import blood2 from "../../assets/donation/b1.png"
import blood3 from "../../assets/donation/blood7.jpg"
import blood4 from "../../assets/donation/blood11.jpg"
import type1 from "../../assets/donation/type1.png"
import type2 from "../../assets/donation/type2.png"
import type3 from "../../assets/donation/type3.png"
import type4 from "../../assets/donation/type4.png"
import { useState } from 'react';

const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ];
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ];
    const images = [
        { title: "Give blood and keep the world beating", img: blood1 },
        { title: "If you're a blood donor, you're a hero to someone, somewhere, who received your gracious gift of life", img: blood2 },
        { title: "You don't have to have a medical degree to save a life. Just a fair degree of humanity. Give Blood. Save Life", img: blood3 },
        { title: "Your droplets of blood may create an ocean of happiness", img: blood4 },
    ];
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="dark:text-white-900">
            <img src={bg} alt="" />
            <br></br>
            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect} 
                style={{ width: '80%', margin: 'auto', height: '400px' }}
            >
                {images.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={item.img}
                            
                            // alt={item.title}
                            style={{ height: '400px', objectFit: 'cover', borderRadius:'15px'}}
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            {/* Add any additional caption content here */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <br></br>
            <br></br>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={type1}  style={{height:'300px',width:'290px'}} />
      <Card.Body>
        <Card.Title style={{textAlign:'center',fontWeight:'bold'}}>Whole Blood</Card.Title>
        <Card.Text>
        <p>Whole blood donation is the most common and traditional method.  A pint of blood is drawn that contains red and white cells, platelets, and plasma. It's mainly used for trauma and surgery. Shelf life is 21-35 days, and you can donate every 56 days. This is the quickest and easiest donation.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={type2} style={{height:'300px',width:'290px'}}/>
      <Card.Body>
      <Card.Title style={{textAlign:'center',fontWeight:'bold'}}>Platelets</Card.Title>
        <Card.Text>
        <p>Platelets are small cell fragments in the blood that helps stop or prevent bleeding. It's made in our bone marrow and its shelf life is only 5 days! They are used for surgeries, transplants, and to help cancer patients get through chemo. You can donate every seven days, only at our centers.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={type3} style={{height:'300px',width:'290px'}}/>
      <Card.Body>
      <Card.Title style={{textAlign:'center',fontWeight:'bold'}}>Plasma</Card.Title>
        <Card.Text>
        <p>Plasma is the liquid portion of your blood that transports water and nutrients to your body’s tissues. Donations can last up to 1 year, and are used to help burn victims and those with bleeding disorders. You can donate every 28 days, only at our centers.</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={type4} style={{height:'300px',width:'290px'}}/>
      <Card.Body>
      <Card.Title style={{textAlign:'center',fontWeight:'bold'}}>Double Red Cells</Card.Title>
        <Card.Text>
        <p>Double red cells donation is when only red cells are collected, not the other blood components. The donation lasts up to 42 days. Red cells are used for trauma, surgery, anemia, blood loss and disorders. You can donate every 112 days, in centers and select mobiles.</p>
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
            <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
       
    )
}

export default Home;
