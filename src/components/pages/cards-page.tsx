import React from 'react';
import './cards-page.sass';

const WaterColorButton = () => {
    return (
        <div>
            <button>
                <span>Нажми меня</span>
            </button>
        </div>
    );
};

const CardsPage:React.FC = () => (
    <div className='cards-page'>
        <div className="card">
            <img src='/product.jpg' alt=""/>
            <h3>Product name</h3>
            <p>Description text...</p>
            <WaterColorButton/>
        </div>

        <div className="card">
            <img src="/product.jpg" alt=""/>
            <h3>John Smith</h3>
            <p>Frontend developer</p>
        </div>

        <div className="card">
            <h2>How to bake sourdough bread</h2>
            <p>Lorem ipsum dolor sit amet...</p>
            <a href="#">Read more</a>
        </div>

        <section className="card">
            <h2>About project</h2>
            <p>This app allows you to...</p>
        </section>

        <div className="card">
            <span className="icon">⚡️</span>
            <h3>Performance</h3>
            <p>Fast and optimized.</p>
        </div>

        <div className="gallery">
            <div className="card">
                <img src="/product.jpg" alt="Картина 1"/>
                <div className="caption">Акварель №1</div>
            </div>
            <div className="card">
                <img src="/product.jpg" alt="Картина 2"/>
                <div className="caption">Акварель №2</div>
            </div>
            <div className="card">
                <img src="/product.jpg" alt="Картина 3"/>
                <div className="caption">Акварель №3</div>
            </div>
        </div>

        <div className="img-water-wrap">
            <img
                src="/product.jpg"
                alt="test"
                className="img-water"
            />
        </div>
    </div>
);

export default CardsPage;
