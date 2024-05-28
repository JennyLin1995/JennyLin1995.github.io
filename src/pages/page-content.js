import React, { useState, useEffect } from 'react';
import Home from './home/home';
import AboutMe from './about-me/about-me';
import PropTypes from 'prop-types';
import './page-content.scss';
import Gallery from './gallery/gallery';

function PageContent({ currentContent, changeContent }) {
  const [animateOut, setAnimateOut] = useState(true);
  const [content, setContent] = useState(currentContent);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setAnimateOut(true);
    const timeoutId = setTimeout(() => {
      setAnimateOut(false);
      setContent(currentContent);
      setInitialRender(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentContent]);

  return (
    <div
      className={`page-content ${initialRender ? '' : animateOut ? 'fly-out' : 'fly-in'}`}
    >
      {initialRender ? (
        ''
      ) : (
        <>
          {content === 'home' && <Home changeContent={changeContent} />}
          {content === 'aboutme' && <AboutMe />}
          {content === 'gallery' && <Gallery />}
        </>
      )}
    </div>
  );
}

PageContent.propTypes = {
  currentContent: PropTypes.string.isRequired,
  changeContent: PropTypes.func.isRequired,
};

export default PageContent;
