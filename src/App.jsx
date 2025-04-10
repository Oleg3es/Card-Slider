import { useRef, useState } from 'react'
import './App.css'
import Container from './components/Container'
import cards from './data/cards-info.json'
import Card from './components/Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [cardsData, setCardsData] = useState(
    cards.map(card => ({
      ...card,
      basket: 4,
    }))
  );

  const handleIncrement = (cardId) => {
    setCardsData(prevCards =>
      prevCards.map(card =>
        card.id === cardId
          ? { ...card, basket: card.basket + 1 }
          : card
      )
    );
  };

  const handleDecrement = (cardId) => {
    setCardsData(prevCards =>
      prevCards.map(card =>
        card.id === cardId
          ? { ...card, basket: Math.max(0, card.basket - 1) }
          : card
      )
    );
  };

  const swiperRef = useRef(null);

  return (
    <Container>
      <section className="section">
        <div className="card-list">
          <h1 className="card-list__title">
            Хиты продаж
          </h1>
          <div className="card-list__items">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              spaceBetween={10}
              freeMode={false} 
              watchOverflow={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2.1,
                },
                768: {
                  slidesPerView: 3.13,
                },
                1024: {
                  slidesPerView: 3.3,
                },
                1280: {
                  slidesPerView: 4.03,
                },
                1441: {
                  slidesPerView: 4.7
                },
              }}
            >
              {cardsData.map(cardInfo => (
                <SwiperSlide
                  key={cardInfo.id}
                >
                  <Card
                    card={cardInfo}
                    onIncrement={() => handleIncrement(cardInfo.id)}
                    onDecrement={() => handleDecrement(cardInfo.id)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="card-list__navigation">
              <div className="custom-navigation">
                <button
                  className="custom-prev"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
                    <path d="M9.75 1L2.25 8.5L9.75 16" stroke="#888888" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </button>
                <button
                  className="custom-next"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none">
                    <path d="M1.25 1L8.75 8.5L1.25 16" stroke="#888888" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </button>
              </div>
              <button className='card-list__navigation-btn'>
                Смотреть все
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default App
