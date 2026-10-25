import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaCode } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.social)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  return (
    <div className="social">
      {data?.social?.map((social) =>
        social.network.toLowerCase() === 'codeforces' ? (
          <a
            key={social.network}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title="Codeforces"
            style={{
              ...styles.iconStyle,
              display: 'inline-flex',
              width: 40,
              height: 40,
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.socialIconBgColor,
              color: theme.background,
              textDecoration: 'none',
            }}
          >
            <FaCode size={23} />
          </a>
        ) : (
          <SocialIcon
            key={social.network}
            style={styles.iconStyle}
            url={social.href}
            network={social.network}
            bgColor={theme.socialIconBgColor}
            fgColor={theme.background}
            target="_blank"
            rel="noopener noreferrer"
          />
        )
      )}
    </div>
  );
}

export default Social;