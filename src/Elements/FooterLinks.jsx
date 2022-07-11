import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faVk,
  faYandex,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const FooterLinks = () => {
    return (
        <div className='Footer'>
            <div className='Links'>
             <a
            href={"https://open.spotify.com/artist/0buf6IJYMHaGv7Rm1VwvdX?si=5GYylnkzSHO6c-imJZ3cJg"}
            className="endlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify} size="3x" />
          </a>
          <a
            href={"https://vk.com/artist/isten"}
            className="endlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVk} size="3x" />
          </a>
          <a
            href={"https://music.yandex.ru/artist/8662025"}
            className="endlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYandex} size="3x" />
          </a>
          <a
            href={"https://music.apple.com/us/artist/%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%8C/1496477518"}
            className="endlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faApple} size="3x" />
          </a>
          </div>
        </div>
    );
};

export default FooterLinks;