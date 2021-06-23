import React from 'react';

function Footer(){
    return(
      <footer>
      <div class="footer-l">
        <div class="footer-block">
          <div class="footer-logo">
            <h2>Play</h2>
          </div>
          <div class="footer-input">
            <input type="text" placeholder="Message" />
          </div>
        </div>
        <hr />
        <div class="footer-links">
          <div class="footer-links-logo">
            <h3>Games</h3>
          </div>
          <div class="footer-link">
            <p>Инфо</p>
            <a href="#">Домой</a>
            <a href="#">Контакты</a>
          </div>
          <div class="footer-link">
            <p>О себе</p>
            <a href="#">Школьник</a>
            <a href="#">Програмист</a>
            <a href="#">№26</a>
          </div>
          <div class="footer-link">
            <p>Соц сети</p>
            <a href="#">WatSapp</a>
            <a href="#">Facebook</a>
            <a href="#">Ютуб</a>
          </div>
          <div class="footer-link">
            <p>Купить</p>
            <a href="#">8 702 469 26 36</a>
            <a href="#">tanabai.aldiyar.2008@gmail.com</a>
            <a href="#">Позванить</a>
            <a href="#">WatSapp</a>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer