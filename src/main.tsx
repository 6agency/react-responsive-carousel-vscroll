import React from 'react';
import { createRoot } from 'react-dom/client';

import(/* webpackChunkName: "carousel-component" */ './components/Carousel').then(({ default: Carousel }) => {
    const DemoCarousel = () => (
        <Carousel
            showArrows
            infiniteLoop
            autoPlay
            emulateTouch
            onClickItem={(...args) => console.log('onClickItem', ...args)}
            onChange={(...args) => console.log('onChange', ...args)}
            onClickThumb={(...args) => console.log('onClickThumb', ...args)}
        >
            <div>
                <img src="__tests__/jsdom/assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="__tests__/jsdom/assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="__tests__/jsdom/assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="__tests__/jsdom/assets/4.jpeg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="__tests__/jsdom/assets/5.jpeg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="__tests__/jsdom/assets/6.jpeg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
    const container = document.querySelector('.demo-carousel');
    const root = createRoot(container!);
    root.render(<DemoCarousel />);
});
