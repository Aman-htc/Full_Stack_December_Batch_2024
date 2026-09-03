import { use, useRef, useState, useSyncExternalStore } from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, CircleFill } from 'react-bootstrap-icons';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function RBCarousel() {



    const slider = [
        {
            id: 1,
            Image: 'https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg',
            title: '  First slide label',
            para: 'Nulla vitae elit libero, a pharetra augue mollis interdum',
            rounde: 'coundedImage'
        },
        {
            id: 2,
            Image: 'https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg',
            title: '  First slide label',
            para: 'Nulla vitae elit libero, a pharetra augue mollis interdum',

        },
        {
            id: 3,
            Image: 'https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
            title: '  First slide label',
            para: 'Nulla vitae elit libero, a pharetra augue mollis interdum',

        }
    ]


    const [sliderIndex, setSliderindex] = useState()
    const sliderRef = useRef()
    const prevbutton = () => {
        sliderRef.current.prev()
    }
    const Nextprevbutton = () => {
        sliderRef.current.next()
    }

    const ChangeHamdale = (index) => {
        setSliderindex(index)

    }

    return (

        <>

            <Breadcrumb className="mb-5">

                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Layout
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Interactive Components
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Carousal</Breadcrumb.Item>
            </Breadcrumb>
            <hr />



            <div className='w-75 mt-5 ms-5'>
                <Carousel
                    activeIndex={sliderIndex}
                    onSelect={ ChangeHamdale}

                    ref={sliderRef}
                    prevIcon={<ArrowLeftCircle />}
                    nextIcon={<ArrowRightCircle />}

                    indicators={false}
                >


                    {slider.map((slider, index) => {
                        return (

                            <Carousel.Item key={index}>
                                <Image
                                    src={slider.Image}
                                    className="d-block w-100 rounded-5"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{slider.title}</h3>
                                    <p>{slider.para}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )

                    })}
                </Carousel>

                {/* image slider */}
                {/* <div className='mt-2'>
                    {slider.map((slider, index) => {
                        return (
                            <Image  src={slider.Image} className='me-3 coundedImage' onClick={() => setSliderindex(index)} style={{width:'100px'}} />
                        )
                         })}
                </div> */}



                {/* dot slider*/}
                <div className='d-flex justify-content-center mt-2'>
                    {slider.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSliderindex(index)}
                            className={`dot ${sliderIndex === index ? "active-dot" : ""}`}
                        ></div>
                    ))}
                </div>


                {/* button slider */}
                <div className='text-center mt-3'>

                    <Button onClick={prevbutton} className='me-3'><ArrowLeft />prev</Button>
                    <Button onClick={Nextprevbutton}>next <ArrowRight /></Button>
                </div>
            </div>
        </>
    );
}

export default RBCarousel;
