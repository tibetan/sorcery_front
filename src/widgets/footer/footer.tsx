import React from 'react';

import './footer.sass';
import {Text} from "@/shared/ui/text";

const Footer = () => {
  return (
    <footer className="footer">
        <Text as='div' show>
            © Agniiya, 2026. All rights reserved.
        </Text>
    </footer>
  );
};

export default Footer;
