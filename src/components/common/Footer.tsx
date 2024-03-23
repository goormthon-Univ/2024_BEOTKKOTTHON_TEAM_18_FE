import FooterElement from '@/components/common/FooterElement.tsx';
import HomeIcon from '@/components/icons/HomeIcon.tsx';
import CirclePlusIcon from '@/components/icons/CirclePlusIcon.tsx';
import UserIcon from '@/components/icons/UserIcon.tsx';
import { useLocation } from 'react-router-dom';
import { footerLabelPathInfo } from '@/constants/footerLabelPathInfo.ts';
import { blueDarkHex, grayDarkHex } from '@/constants';
import NotificationIcon from '@/components/icons/NotificationIcon.tsx';

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={
        'w-full h-[64px] flex justify-evenly shadow-2xl border-t border-t-hc-gray rounded-t-3xl'
      }>
      <FooterElement
        icon={
          <HomeIcon
            fill={
              location.pathname === footerLabelPathInfo['home'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={footerLabelPathInfo['home'].label}
        path={footerLabelPathInfo['home'].path}
      />
      <FooterElement
        icon={
          <NotificationIcon
            fill={
              location.pathname === footerLabelPathInfo['notification'].path
                ? blueDarkHex
                : grayDarkHex
            }
            hasNew={true}
          />
        }
        label={'알림'}
        path={'/notification'}
      />
      <FooterElement
        icon={
          <CirclePlusIcon
            fill={
              location.pathname === footerLabelPathInfo['ddeepCreate'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={'띱추가'}
        path={'/ddeep/create'}
      />
      <FooterElement
        icon={
          <UserIcon
            stroke={
              location.pathname === footerLabelPathInfo['myPage'].path
                ? blueDarkHex
                : grayDarkHex
            }
          />
        }
        label={'마이페이지'}
        path={'/mypage'}
      />
    </footer>
  );
};

export default Footer;
