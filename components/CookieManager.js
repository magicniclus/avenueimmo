import React, { useEffect } from "react";

const CookieManager = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.tarteaucitron) {
      console.log("ok");
      window.tarteaucitron.init({
        privacyUrl: "/politique-de-confidentialite",
        bodyPosition: "bottom",
        hashtag: "#tarteaucitron",
        cookieName: "tarteaucitron",
        orientation: "middle",
        groupServices: false,
        serviceDefaultState: "wait",
        showAlertSmall: false,
        cookieslist: false,
        showIcon: true,
        iconPosition: "BottomRight",
        adblocker: false,
        DenyAllCta: true,
        AcceptAllCta: true,
        highPrivacy: true,
        handleBrowserDNTRequest: false,
        removeCredit: false,
        moreInfoLink: true,
        useExternalCss: false,
        useExternalJs: false,
        readmoreLink: "",
        mandatory: true,
        mandatoryCta: true,
      });
    }
  }, []);

  return null;
};

export default CookieManager;
