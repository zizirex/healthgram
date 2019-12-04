import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import {Link} from 'react-router-dom'

import japan from './component/media/assets/Japan@2x.svg';
import japanBG from './component/media/assets/japan-bg.gif';
import usa from './component/media/assets/usa.png';
import usaBG from './component/media/assets/us_bg.jpg';
import china from './component/media/assets/china.png';
import chinaBG from './component/media/assets/china_bg.jpg';
import brazil from './component/media/assets/brazil.png';
import brazilBG from './component/media/assets/brazil_bg.jpg';



const items = [
    {
        src: `${japanBG}`,
        src2: `${japan}`,
        altText: 'Slide 1',
        caption: 'Japan'
    },
    {
        src: `${usaBG}`,
        src2: `${usa}`,
        altText: 'Slide 2',
        caption: 'USA'
    },
    {
        src: `${brazilBG}`,
        src2: `${brazil}`,
        altText: 'Slide 3',
        caption: 'Brazil'
    },
    {
        src: `${chinaBG}`,
        src2: `${china}`,
        altText: 'Slide 4',
        caption: 'China'
    }
];


class Carou extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {

        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}

                >
                    <div className="background-div">
                        <img src={item.src} alt={item.altText} className=" background" />
                    <img src={item.src2} alt={item.altText} className="mx-0 info-logo" />
                        <div></div>
                    </div>
                    <CarouselCaption  />

                </CarouselItem>

            );
        });

        return (

            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                ride="carousel"
                interval="3000"
                slide={false}
                className="carousel-fade"

            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className="carousel-indicators"/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />

            </Carousel>
        );

    }
}


export default Carou;