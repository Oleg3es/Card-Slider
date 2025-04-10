import React, { useState } from 'react'
import Rating from './Rating'
import tireBlue from '../../public/images/tire1.svg'
import tireRed from '../../public/images/tire2.svg'
import tireBlack from '../../public/images/tire3.svg'
import heart from '../../public/images/heart.svg'
import medal from '../../public/images/medal.svg'
import shield from '../../public/images/shield.svg'
import percent from '../../public/images/percent.svg'
import present from '../../public/images/present.svg'
import like from '../../public/images/like.svg'

const Card = ({ card, onIncrement, onDecrement }) => {
    console.log('Rendering card:', card.id, 'with basket:', card.basket);
    return (
        <div className="card">
            <div className="card__preview">
                <div className="card__preview-btns">
                    <ul className="card__preview-list">
                        <li className="card__preview-item">
                            <img src={medal} alt="" loading='lazy'/>
                        </li>
                        <li className="card__preview-item">
                            <img src={shield} alt="" loading='lazy'/>
                        </li>
                        <li className="card__preview-item">
                            <img src={percent} alt="" loading='lazy'/>
                        </li>
                        <li className="card__preview-item">
                            <img src={present} alt="" loading='lazy'/>
                        </li>
                        <li className="card__preview-item">
                            <img src={like} alt="" loading='lazy'/>
                        </li>
                    </ul>
                </div>
                <div className="card__preview-img">
                    <img src={card.img} alt="" loading='lazy' width={149} />
                </div>
            </div>
            <div className="card__description">
                <div className="card__description-info">
                    <h2 className="card__description-info-title">
                        {card.title}
                    </h2>
                    <div className="card__description-info-rating">
                        <div className='card__description-info-rating-star'>
                            <Rating value={card.rating} />
                        </div>
                        <div className="card__description-info-rating-label">
                            {card.labels}
                        </div>
                    </div>
                    <div className="card__description-info-type">
                        <ul className="card__description-info-type-list">
                            <li className="card__description-info-type-item">
                                <div>
                                    <img src={tireBlue} alt="" loading='lazy' />
                                </div>
                                <div>
                                    {card.season}
                                </div>
                            </li>
                            <li className="card__description-info-type-item">
                                <img src={tireRed} alt="" loading='lazy' />
                                {card.type}
                            </li>
                            <li className="card__description-info-type-item">
                                <img src={tireBlack} alt="" loading='lazy' />
                                {card.condition}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card__description-purchase">
                    <div className="card__description-purchase-price">
                        <div className="card__description-purchase-price-originalPrice">
                            {card.originalPrice} ₽
                        </div>
                        <div className="card__description-purchase-price-now">
                            {card.price} ₽
                        </div>
                    </div>
                    <div className="card__description-purchase-basket">
                        <div className="card__description-purchase-basket-count">
                            <button onClick={onDecrement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="3" viewBox="0 0 12 3" fill="none">
                                    <line x1="1" y1="1.81738" x2="11" y2="1.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                            <span>
                                {card.basket}
                            </span>
                            <button onClick={onIncrement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <line x1="1" y1="6.81738" x2="11" y2="6.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                                    <line x1="6" y1="11.8174" x2="6" y2="1.81738" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                        <button className="card__description-purchase-basket-btn">
                            В корзину
                        </button>
                        <div className="card__description-purchase-basket-like">
                            <img src={heart} alt="" />
                        </div>
                    </div>
                    <button className="card__description-purchase-buy">
                        Купить в 1 клик
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card