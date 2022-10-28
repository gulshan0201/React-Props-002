import React from 'react'

import { AiOutlineShareAlt } from "@react-icons/all-files/ai/AiOutlineShareAlt";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BiMessageError } from "@react-icons/all-files/bi/BiMessageError";

const Card = ({ poster1, title, year, duration, type, desc, banner }) => {
  return (
    <>
      <main>
        <div className='left'>
          <section>
            <img style={{ height: "90px" }} src={poster1} alt="" />
            <div className='right'>
              <h2>{title}</h2>
              <p>{year}</p>
              <span>
                <button>{duration}</button>
                <p>{type}</p>
              </span>
            </div>
          </section>
          <p>{desc}
          </p>

          <div className='icons'>
            <p><AiOutlineShareAlt /></p>
            <p><AiOutlineHeart /></p>
            <p><BiMessageError /></p>
          </div>
        </div>
        <aside>
          <img src={banner} alt="" />
        </aside>
      </main>
    </>
  )
}

export default Card