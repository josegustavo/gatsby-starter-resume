import React, { Component } from 'react';
import HeartIcon from '../assets/heart.svg';
import SocialIcon from './social_icon';
import SpanishIcon from '../assets/spanish-language.svg';
import EnglishIcon from '../assets/english-language.svg';
import PrinterIcon from '../assets/printer.svg';

import { Link } from 'gatsby';

class Footer extends Component {
  print() {
    window.print();
  }

  render() {
    return (
      <footer className="print:hidden py-6 mx-auto items-center justify-between md:flex">
        <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-0 sm:ml-2">
          <span className="inline-block mr-1">
            {' '}
            © {new Date().getFullYear()} |{' '}
            {this.props.locale === 'es' ? 'Desarrollado con' : 'Developed with'}
          </span>
          <span className="inline-block mr-1">
            <HeartIcon
              className="h-3 w-3 fill-current"
              style={{ color: '#c93017' }}
            />
          </span>
          <span className="inline-block mr-1">
            {this.props.locale === 'es' ? 'por' : 'by'}
          </span>
          <a
            className="font-bold"
            href="https://jose.quilca.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jose Quilca
          </a>
        </div>
        {this.props.social && (
          <div className="flex items-center justify-center mb-5 md:mb-0 ml-0 sm:ml-2">
            {this.props.social.map((item) => (
              <a
                key={item.service}
                className="footer-social-link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.service}
              >
                <SocialIcon type={item.service} />
              </a>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center ml-0 sm:ml-2">
          <button className="footer-social-link" onClick={this.print}>
            <PrinterIcon className="footer-social-icon" />
          </button>
          {this.props.locale && this.props.locale !== 'en' && (
            <Link
              to="/"
              locale="en"
              title="View in English"
              className="footer-social-link"
            >
              <EnglishIcon className="footer-social-icon" />
            </Link>
          )}
          {this.props.locale && this.props.locale !== 'es' && (
            <Link
              to="/es"
              locale="es"
              title="Ver en Español"
              className="footer-social-link"
            >
              <SpanishIcon className="footer-social-icon" />
            </Link>
          )}
        </div>
      </footer>
    );
  }
}

export default Footer;
