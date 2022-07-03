/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerGithub from "common/assets/image/github-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerMedium from "common/assets/image/medium-social.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, Aut.`,
  social: [
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    {
      link: "https://github.com/Aut-Protocol",
      icon: footerGithub,
    },
    {
      link: "https://twitter.com/opt_aut",
      icon: footerTwitter,
    },
    // {
    //   link: "https://blog.skillwallet.id",
    //   icon: footerMedium,
    // },
  ],
};
