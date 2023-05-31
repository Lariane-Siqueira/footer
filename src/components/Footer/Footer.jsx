/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import whatsapp from "../../images/whatsapp.png";
import logo from "../../images/logo.png";

const footerTest = () => {
  return (
    <div className="footer">
      <div className="footer-content footer-padding">
        <div className="footer-links">
        <div className="content">
          <img src={logo} alt="logo" className="logo"/>
          <p>
            Our barbershop is the created for men who appreciate premium
            quality, time and flawless look.
          </p>
          <div className="socialMedia">
            <p><img src={facebook} alt="Facebook" /></p>
            <p>
              <img src={twitter} alt="Twitter" />
            </p>
            <p>
              <img src={whatsapp} alt="Whatsapp" />
            </p>
            <p>
              <a href="https://instagram.com/imperio_do_corte_2019?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                <img src={instagram} alt="Instagram" />
              </a>
            </p>
          </div>
        </div>
        <div className="content contato">
          <h4>Onde Estamos</h4>
          <p>Av. Pico Das Agulhas N°1184</p>
          <p className="endereco-email">barbearia_imperiodocorte@hotmail.com</p>
          <p>Tel: (12) 987074659 | (12) 988094960</p>
          <p></p>
        </div>
        <div className="content funcionamento">
          <h4>Funcionamento</h4>
          <p>Segunda - Sábado: 09:00 - 19:00</p>
          <p>Domingo: Fechado</p>
        </div>
        <div className="content email">
          <h4>Fale Conosco</h4>
          <input
            type="email"
            name="email"
            className="input-email"
            placeholder="Digite seu e-mail"
          />
          <button type="submit" className="botao-email">
            ENVIAR
          </button>
        </div>
      </div>

      <hr size="1"/>

      <div className="footer-below">
        <div className="copyright">
          <p>
            Copyright®{new Date().getFullYear()}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default footerTest;
