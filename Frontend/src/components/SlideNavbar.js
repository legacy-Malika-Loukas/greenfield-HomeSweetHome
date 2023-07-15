import React from 'react';
import logo from '../images/sweet.png';


const SlideNavbar = () => {
  const baseBgColor = '#354152';
  const baseColor = '#7e8ba3';
  const baseFontWeight = 300;
  const baseFontSize = '1rem';
  const baseLineHeight = 1.5;
  const baseFontFamily = 'Helvetica Neue, sans-serif';
  const inputPlaceholderColor = '#7e8ba3';
  const gridMaxWidth = '25rem';
  const gridWidth = '100%';
  const linkColor = '#7e8ba3';

  const gridStyle = {
    margin: '0 auto',
    maxWidth: gridMaxWidth,
    width: gridWidth,
  };

  const registerStyle = {
    boxShadow: '0 0 250px #000',
    textAlign: 'center',
    padding: '4rem 2rem',
  };

  const inputStyle = {
    border: '1px solid #242c37',
    borderRadius: '999px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    outline: '0',
    padding: '.5rem 1rem',
    font: `${baseFontWeight} ${baseFontSize}/${baseLineHeight} ${baseFontFamily}`,
    '&::placeholder': {
      color: inputPlaceholderColor,
    },
    '&[type="email"], &[type="password"]': {
      width: '100%',
    },
    '&[type="email"]': {
      backgroundImage:
        'url("data:image/svg+xml;charset=UTF-8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" fill=\\"#242c37\\"><path d=\\"M256.017 273.436l-205.17-170.029h410.904l-205.734 170.029zm-.034 55.462l-205.983-170.654v250.349h412v-249.94l-206.017 170.245z"/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1.5rem',
      backgroundPosition: '1rem 50%',
    },
    '&[type="password"]': {
      backgroundImage:
        'url("data:image/svg+xml;charset=UTF-8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" fill=\\"#242c37\\"><path d=\\"M195.334 223.333h-50v-62.666c0-61.022 49.645-110.667 110.666-110.667 61.022 0 110.667 49.645 110.667 110.667v62.666h-50v-62.666c0-33.452-27.215-60.667-60.667-60.667-33.451 0-60.666 27.215-60.666 60.667v62.666zm208.666 30v208.667h-296v-208.667h296zm-121 87.667c0-14.912-12.088-27-27-27s-27 12.088-27 27c0 7.811 3.317 14.844 8.619 19.773 4.385 4.075 6.881 9.8 6.881 15.785v22.942h23v-22.941c0-5.989 2.494-11.708 6.881-15.785 5.302-4.93 8.619-11.963 8.619-19.774z"/></svg>")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '1.5rem',
      backgroundPosition: '1rem 50%',
    },
    '&[type="submit"]': {
      backgroundImage: 'linear-gradient(160deg, #8ceabb 0%, #378f7b 100%)',
      color: '#fff',
      marginBottom: '6rem',
      width: '100%',
    },
  };

  const linkStyle = {
    color: linkColor,
  };

  return (
    <div className="align">
      <div className="grid align__item">
        <div className="register" style={registerStyle}>
        <img 
          src={logo}
          alt="Logo"
          className="logo"
        />            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#8ceabb" />
                <stop offset="100%" stopColor="#378f7b" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
            />
          <h2 style={{ fontSize: '2.75rem', fontWeight: '100', margin: '0 0 1rem', textTransform: 'uppercase' }}>
            Sign Up
          </h2>
          <form action="" method="post" className="form">
            <div className="form__field" style={{ marginBottom: '1rem' }}>
              <input type="email" placeholder="" style={inputStyle} />
            </div>
            <div className="form__field" style={{ marginBottom: '1rem' }}>
              <input type="password" placeholder="" style={inputStyle} />
            </div>
            <div className="form__field">
              <input type="submit" value="Sign Up" style={inputStyle} />
            </div>
          </form>
          <p>
            Already have an account? <a href="#" style={linkStyle}>Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideNavbar;
