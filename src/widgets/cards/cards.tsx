import React from "react";

import { Card } from '@/shared/ui/card';
import { Image } from '@/shared/ui/image';
import { Caption } from '@/shared/ui/caption';

import productImg from '../../shared/assets/images/product.jpg';
import './cards.sass';

const WaterColorButton = () => {
    return (
        <div>
            <button>
                <span>Нажми меня</span>
            </button>
        </div>
    );
};

const Cards:React.FC = () => (
    <div className='cards-page'>
        <Card hoverable={false}>
            <Image src={productImg} alt="product" ratio="3:2" />
            <h3>Product name</h3>
            <p>Description text...</p>
            <WaterColorButton/>
        </Card>

        <Card>
            <Image src={productImg} alt="product" ratio="3:2" mask />
            <h3>Product name</h3>
            <p>Description text...</p>
            <Caption>Акварель №1</Caption>
            <WaterColorButton/>
        </Card>

        <Card>
            <Image src={productImg} ratio="4:5" mask />
            <h3>John Smith</h3>
            <p>Frontend developer</p>
        </Card>

        <Card>
            <h2>How to bake sourdough bread</h2>
            <p>Lorem ipsum dolor sit amet...</p>
            <a href="#">Read more</a>
        </Card>

        <Card>
            <h2>About project</h2>
            <p>This app allows you to...</p>
        </Card>

        <Card hoverable={false}>
            <p>Статичный блок</p>
        </Card>

        <Card>
            <span className="icon">⚡</span>
            <h3>Performance</h3>
            <p>Fast and optimized.</p>
        </Card>

        <div className="gallery">
            <div className="card">
                <img src={productImg} alt="Картина 1"/>
                <div className="caption">Акварель №1</div>
            </div>
            <div className="card">
                <img src={productImg} alt="Картина 2"/>
                <div className="caption">Акварель №2</div>
            </div>
            <div className="card">
                <img src={productImg} alt="Картина 3"/>
                <div className="caption">Акварель №3</div>
            </div>
        </div>

        <div className="img-water-wrap">
            <img
                src={productImg}
                alt="test"
                className="img-water"
            />
        </div>
    </div>
);

export default Cards;
