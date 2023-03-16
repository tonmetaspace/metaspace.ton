// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

const newLocal = `<!DOCTYPE html><html lang="en"> <head> <meta charSet="utf-8"/> <meta name="viewport" content="width=device-width"/> <meta name="next-head-count" content="2"/> </head><body class="preload"><div id="__next" data-reactroot=""> <footer class="Container Footer Footer--with-offset size--default"> <div class="Container__inner"> <div class="Footer__inner"> <div class="Footer__links"> <div class="HideByMediaBlock" style="--xsVisible:block;--preSVisible:block;--sVisible:block;--mVisible:block;--lVisible:none;--xlVisible:none;--xxlVisible:none"> <div class="Footer__col Footer__col--logo"> <a class="Logo Logo--dark" href="https://ton.org"> <div class="Logo__inner Logo__inner--large"> </div><div class="Logo__inner Logo__inner--small"> <svg
   width="49.695183mm"
   height="8.7312498mm"
   viewBox="0 0 49.695183 8.7312498"
   version="1.1"
   id="svg1590"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs1587" />
  <g
     id="layer1"
     transform="translate(-45.587789,-109.15866)">
    <g
       id="g30740"
       transform="matrix(0.26079619,0,0,0.2607954,1397.21,-109.96445)">
      <g
         aria-label=" Metaspace"
         transform="matrix(0.30292535,0,0,0.30292535,-7007.2796,-13815.799)"
         id="text30738"
         style="font-weight:900;font-size:120px;line-height:1;font-family:Mulish;-inkscape-font-specification:'Mulish Heavy';white-space:pre;shape-inside:url(#rect34153);display:inline;fill:#2188ff">
        <path
           d="m 6023.2773,48466.189 v -84.6 h 19.2 l 27.72,62.04 h -3.96 l 27.6,-62.04 h 19.32 v 84.6 h -20.04 v -51.84 h 5.16 l -24,51.84 h -12.48 l -24.12,-51.84 h 5.52 v 51.84 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21758" />
        <path
           d="m 6159.9571,48467.509 q -16.56,0 -25.8,-8.52 -9.12,-8.52 -9.12,-23.4 0,-9.24 3.84,-16.44 3.84,-7.2 10.8,-11.16 6.96,-4.08 16.32,-4.08 9.24,0 15.36,4.08 6.24,3.96 9.36,11.04 3.12,6.96 3.12,16.2 v 4.56 h -40.92 v -10.08 h 25.2 l -2.04,1.68 q 0,-6.84 -2.64,-10.08 -2.52,-3.36 -7.2,-3.36 -5.4,0 -8.28,4.08 -2.76,3.96 -2.76,12 v 2.16 q 0,8.04 3.96,11.76 3.96,3.72 11.4,3.72 4.8,0 9,-1.08 4.32,-1.08 8.16,-3.48 l 5.52,13.92 q -4.56,3.12 -10.56,4.8 -6,1.68 -12.72,1.68 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21755" />
        <path
           d="m 6224.7567,48467.509 q -12.96,0 -19.56,-6.12 -6.48,-6.24 -6.48,-18.84 v -21.6 h -11.4 v -15.72 h 11.4 v -14.4 l 21.36,-5.04 v 19.44 h 14.88 v 15.72 h -14.88 v 20.76 q 0,5.28 2.4,7.08 2.4,1.68 5.76,1.68 2.04,0 3.48,-0.24 1.56,-0.36 3.24,-0.96 v 16.44 q -2.64,1.08 -5.28,1.44 -2.52,0.36 -4.92,0.36 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21752" />
        <path
           d="m 6267.2367,48467.509 q -7.92,0 -13.92,-3.72 -6,-3.84 -9.48,-11.04 -3.36,-7.2 -3.36,-17.04 0,-9.96 3.36,-17.04 3.48,-7.2 9.48,-10.92 6,-3.84 13.92,-3.84 7.08,0 12.72,3.36 5.76,3.36 7.56,8.76 h -1.2 l 1.32,-10.8 h 20.52 q -0.36,4.08 -0.72,8.28 -0.24,4.2 -0.24,8.28 v 44.4 h -21.12 l -0.24,-10.32 h 1.44 q -1.8,5.28 -7.56,8.52 -5.64,3.12 -12.48,3.12 z m 6.84,-15.84 q 5.4,0 8.76,-3.72 3.36,-3.84 3.36,-12.24 0,-8.4 -3.36,-12.12 -3.36,-3.84 -8.76,-3.84 -5.4,0 -8.76,3.84 -3.36,3.72 -3.36,12.12 0,8.4 3.24,12.24 3.36,3.72 8.88,3.72 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21749" />
        <path
           d="m 6343.9166,48467.509 q -8.52,0 -15.48,-1.68 -6.84,-1.8 -11.64,-4.8 l 5.16,-13.92 q 4.68,2.64 10.44,4.32 5.88,1.68 11.64,1.68 4.56,0 6.6,-1.32 2.16,-1.44 2.16,-3.72 0,-1.8 -1.32,-2.88 -1.32,-1.08 -3.96,-1.56 l -12.96,-2.28 q -7.68,-1.44 -12,-5.64 -4.2,-4.32 -4.2,-11.16 0,-6.24 3.36,-10.8 3.36,-4.68 9.6,-7.2 6.24,-2.64 14.76,-2.64 6.96,0 13.2,1.56 6.36,1.56 11.04,4.92 l -5.52,13.56 q -3.72,-2.52 -8.76,-4.08 -4.92,-1.68 -9.24,-1.68 -5.16,0 -7.32,1.56 -2.16,1.44 -2.16,3.6 0,1.68 1.2,2.88 1.2,1.08 3.84,1.56 l 12.96,2.28 q 7.92,1.32 12.12,5.52 4.32,4.08 4.32,11.16 0,6.6 -3.6,11.28 -3.48,4.56 -9.72,7.08 -6.24,2.4 -14.52,2.4 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21746" />
        <path
           d="m 6381.2364,48492.109 v -70.32 q 0,-4.08 -0.24,-8.28 -0.24,-4.2 -0.72,-8.28 h 20.64 l 1.32,10.8 h -1.2 q 1.68,-5.4 7.44,-8.76 5.76,-3.36 12.84,-3.36 7.92,0 13.92,3.84 6,3.72 9.36,10.92 3.48,7.08 3.48,17.04 0,9.84 -3.48,17.04 -3.36,7.2 -9.36,11.04 -6,3.72 -13.92,3.72 -6.96,0 -12.6,-3.12 -5.64,-3.24 -7.44,-8.52 h 1.32 v 36.24 z m 33.24,-40.44 q 5.52,0 8.76,-3.72 3.36,-3.84 3.36,-12.24 0,-8.4 -3.36,-12.12 -3.24,-3.84 -8.76,-3.84 -5.4,0 -8.76,3.84 -3.36,3.72 -3.36,12.12 0,8.4 3.36,12.24 3.36,3.72 8.76,3.72 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21743" />
        <path
           d="m 6482.5163,48467.509 q -7.92,0 -13.92,-3.72 -6,-3.84 -9.48,-11.04 -3.36,-7.2 -3.36,-17.04 0,-9.96 3.36,-17.04 3.48,-7.2 9.48,-10.92 6,-3.84 13.92,-3.84 7.08,0 12.72,3.36 5.76,3.36 7.56,8.76 h -1.2 l 1.32,-10.8 h 20.52 q -0.36,4.08 -0.72,8.28 -0.24,4.2 -0.24,8.28 v 44.4 h -21.12 l -0.24,-10.32 h 1.44 q -1.8,5.28 -7.56,8.52 -5.64,3.12 -12.48,3.12 z m 6.84,-15.84 q 5.4,0 8.76,-3.72 3.36,-3.84 3.36,-12.24 0,-8.4 -3.36,-12.12 -3.36,-3.84 -8.76,-3.84 -5.4,0 -8.76,3.84 -3.36,3.72 -3.36,12.12 0,8.4 3.24,12.24 3.36,3.72 8.88,3.72 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21740" />
        <path
           d="m 6566.6362,48467.509 q -10.08,0 -17.64,-3.84 -7.56,-3.84 -11.76,-10.92 -4.2,-7.2 -4.2,-17.16 0,-9.96 4.2,-17.04 4.2,-7.08 11.76,-10.8 7.56,-3.84 17.64,-3.84 6.24,0 12.24,1.68 6,1.68 9.72,4.8 l -6,14.52 q -2.88,-2.4 -6.6,-3.6 -3.6,-1.32 -7.08,-1.32 -6.6,0 -10.32,3.96 -3.6,3.96 -3.6,11.64 0,7.68 3.6,11.76 3.72,3.96 10.32,3.96 3.36,0 7.08,-1.2 3.72,-1.32 6.6,-3.6 l 6,14.52 q -3.84,3 -9.84,4.8 -5.88,1.68 -12.12,1.68 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21737" />
        <path
           d="m 6628.4361,48467.509 q -16.56,0 -25.8,-8.52 -9.12,-8.52 -9.12,-23.4 0,-9.24 3.84,-16.44 3.84,-7.2 10.8,-11.16 6.96,-4.08 16.32,-4.08 9.24,0 15.36,4.08 6.24,3.96 9.36,11.04 3.12,6.96 3.12,16.2 v 4.56 h -40.92 v -10.08 h 25.2 l -2.04,1.68 q 0,-6.84 -2.64,-10.08 -2.52,-3.36 -7.2,-3.36 -5.4,0 -8.28,4.08 -2.76,3.96 -2.76,12 v 2.16 q 0,8.04 3.96,11.76 3.96,3.72 11.4,3.72 4.8,0 9,-1.08 4.32,-1.08 8.16,-3.48 l 5.52,13.92 q -4.56,3.12 -10.56,4.8 -6,1.68 -12.72,1.68 z"
           style="text-align:center;text-anchor:middle;fill:#ffffff"
           id="path21734" />
      </g>
    </g>
  </g>
</svg> </div></a> </div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">Explore</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="https://metaspace.foundation"> <div class="Text Text--l-1 Text--t-default">Metaspace</div></a> </div><div class="Footer__col_link_wrap"> </div></div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">Build</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="https://tonmetaspace.org/docs/whitepaper"> <div class="Text Text--l-1 Text--t-default">White paper</div></a> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="./docs"> <div class="Text Text--l-1 Text--t-default">Documentation</div></a> </div><div class="Footer__col_link_wrap"> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="./roadmap"> <div class="Text Text--l-1 Text--t-default">Roadmap</div></a> </div><div class="Footer__col_link_wrap"> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="https://tonmetaspace.org/ambassador-program"> <div class="Text Text--l-1 Text--t-default">Ambassador Program</div></a> </div></div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">Source Code</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="https://github.com/tonmetaspace/.github/blob/main/CODE_OF_CONDUCT.md"> <div class="Text Text--l-1 Text--t-default">Code of Conduct</div></a> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="./license"> <div class="Text Text--l-1 Text--t-default">CC0 License</div></a> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="https://github.com/tonmetaspace"> <div class="Text Text--l-1 Text--t-default">GitHub</div></a> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" https://github.com/tonmetaspace/issues"> <div class="Text Text--l-1 Text--t-default">Issues</div></a> </div><div class="Footer__col_link_wrap"> </div></div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">Community</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> </div <div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="https://tonmetaspace.org/community"> <div class="Text Text--l-1 Text--t-default">Join community</div></a> </div><div class="Footer__col_link_wrap"> </div><div class="Footer__col_link_wrap"> </div><div class="Footer__col_link_wrap"> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" href="https://tonmetaspace.org/events"> <div class="Text Text--l-1 Text--t-default">Events</div></a> </div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">DAO</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="https://tonmetaspace.org/dao"> <div class="Text Text--l-1 Text--t-default">DAO</div></a> </div><div class="Footer__col_link_wrap"> </div></div></div><div class="Footer__col"> <div class="Title Title--l-1 Title--t-footer Footer__col_header">Other</div><div class="Footer__col_links"> <div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="https://t.me/ton_help_bot"> <div class="Text Text--l-1 Text--t-default">Support</div></a> </div><div class="Footer__col_link_wrap"> <a class="Footer__col_link" target="_blank" rel="noreferrer noopener" href="https://t.me/tonmetaspace_support_bot"> </div></div></div></div></div><div class="Footer__copyrights"> <div class="HideByMediaBlock" style="--xsVisible:none;--preSVisible:none;--sVisible:none;--mVisible:none;--lVisible:block;--xlVisible:block;--xxlVisible:block"> <a class="Logo Logo--dark" href="https://ton.org"> <div class="Logo__inner Logo__inner--large"> </div><div class="Logo__inner Logo__inner--small">  </div></a> </div><div class="Caption Caption--l-1 Caption--t-footer Footer__copyrleft_left"> <div class="Footer__copyleft_year">CC0 2023 TON Metaspace</div></div><div class="Footer__copyleft_right"> <div class="Footer__networks"><div class="NetworkIcon NetworkIcon--large"> </div></a> <a href="https://t.me/tonmetaspace" class="Footer__network" target="_blank" rel="noreferrer noopener"> <div class="NetworkIcon NetworkIcon--large"> <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" rx="12" fill="#434343"></rect> <path d="M5.39368 11.7355C8.88334 10.1831 11.2103 9.15973 12.3746 8.66527C15.699 7.2535 16.3897 7.00826 16.84 7.00008C16.939 6.99838 17.1604 7.02344 17.3038 7.14226C17.4249 7.2426 17.4583 7.37813 17.4742 7.47325C17.4901 7.56838 17.51 7.78508 17.4942 7.9544C17.3141 9.88701 16.5346 14.5769 16.138 16.7415C15.9702 17.6574 15.6398 17.9645 15.3199 17.9945C14.6248 18.0599 14.0969 17.5255 13.4236 17.0749C12.3701 16.3697 11.7749 15.9308 10.7522 15.2427C9.57034 14.4475 10.3365 14.0104 11.01 13.2962C11.1863 13.1092 14.2492 10.2648 14.3084 10.0067C14.3159 9.97446 14.3227 9.85417 14.2527 9.79065C14.1828 9.72713 14.0794 9.74885 14.0049 9.76612C13.8992 9.79061 12.2162 10.9264 8.95566 13.1736C8.47792 13.5086 8.04521 13.6718 7.6575 13.6632C7.23009 13.6538 6.40793 13.4165 5.79673 13.2136C5.04708 12.9648 4.45127 12.8333 4.50315 12.4107C4.53017 12.1906 4.82702 11.9656 5.39368 11.7355Z" fill="white"></path> </svg> </div></a> <a href="https://github.com/tonmetaspace" class="Footer__network" target="_blank" rel="noreferrer noopener"> <div class="NetworkIcon NetworkIcon--large"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" rx="12" fill="#98B2BF"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7112 23.4144C14.5424 23.7945 13.295 24 12 24C10.704 24 9.45585 23.7943 8.28636 23.4136C8.82659 23.4784 9.02622 23.1266 9.02622 22.8229C9.02622 22.6907 9.02396 22.4575 9.02094 22.1456C9.01745 21.7846 9.01294 21.3182 9.00972 20.7808C5.67147 21.5065 4.96722 19.1709 4.96722 19.1709C4.42197 17.784 3.63522 17.4147 3.63522 17.4147C2.54547 16.6694 3.71772 16.6846 3.71772 16.6846C4.92147 16.7694 5.55522 17.9221 5.55522 17.9221C6.62622 19.7572 8.36397 19.2274 9.04797 18.9196C9.15672 18.1436 9.46722 17.6143 9.80997 17.3142C7.14522 17.0111 4.34397 15.9813 4.34397 11.3799C4.34397 10.0687 4.81122 8.99704 5.57922 8.15715C5.45547 7.85327 5.04372 6.63288 5.69622 4.97947C5.69622 4.97947 6.70422 4.65671 8.99622 6.21032C9.95397 5.94382 10.98 5.81113 12.0007 5.80571C13.02 5.81094 14.0467 5.94382 15.0052 6.21032C17.2957 4.65671 18.3015 4.97947 18.3015 4.97947C18.9562 6.63288 18.5445 7.85327 18.4207 8.15715C19.1902 8.99704 19.6545 10.0687 19.6545 11.3799C19.6545 15.9925 16.8487 17.0081 14.1757 17.3052C14.6062 17.676 14.9902 18.4084 14.9902 19.529C14.9902 20.6025 14.9835 21.537 14.9791 22.1563C14.9769 22.4631 14.9752 22.6925 14.9752 22.8231C14.9752 23.1282 15.17 23.4807 15.7112 23.4144Z" fill="white"></path> </svg> </div></a> <a href="https://twitter.com/tonmetaspace" class="Footer__network" target="_blank" rel="noreferrer noopener"> <div class="NetworkIcon NetworkIcon--large"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" rx="12" fill="#98B2BF"></rect> <path d="M17.8812 9.40625C17.8812 9.5375 17.8812 9.66875 17.8812 9.78125C17.8812 13.6625 14.9187 18.1437 9.51875 18.1437C7.85 18.1437 6.3125 17.6562 5 16.8312C5.225 16.85 5.46875 16.8687 5.69375 16.8687C7.0625 16.8687 8.3375 16.4 9.35 15.6125C8.05625 15.5937 6.96875 14.7312 6.6125 13.5687C6.8 13.6062 6.96875 13.625 7.175 13.625C7.4375 13.625 7.7 13.5875 7.94375 13.5125C6.59375 13.25 5.58125 12.0687 5.58125 10.6437C5.58125 10.625 5.58125 10.625 5.58125 10.6062C5.975 10.8312 6.425 10.9625 6.9125 10.9812C6.125 10.4562 5.6 9.55625 5.6 8.525C5.6 7.98125 5.75 7.475 5.99375 7.04375C7.4375 8.825 9.6125 9.9875 12.05 10.1187C11.9937 9.9125 11.975 9.66875 11.975 9.44375C11.975 7.8125 13.2875 6.5 14.9187 6.5C15.7625 6.5 16.5312 6.85625 17.0562 7.41875C17.7312 7.2875 18.35 7.04375 18.9312 6.70625C18.7062 7.4 18.2375 7.9625 17.6375 8.3375C18.2375 8.2625 18.8 8.1125 19.325 7.86875C18.95 8.46875 18.4625 8.99375 17.8812 9.40625Z" fill="white"></path> </svg> </div></a> <a href="mailto:press@ton.org" class="Footer__network" target="_blank" rel="noreferrer noopener"> <div class="NetworkIcon NetworkIcon--large"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="12" fill="#98B2BF"></circle> <path d="M12.0033 11.3576L17.409 8.18617C17.0931 7.71875 16.5675 7.43669 16.0033 7.43188H8.00332C7.4362 7.43164 6.90566 7.71188 6.58618 8.18046L12.0033 11.3576Z" fill="white"></path> <path d="M12.5748 12.3404C12.4012 12.4411 12.2041 12.4944 12.0033 12.4947C11.8031 12.4961 11.6061 12.4449 11.4319 12.3461L6.28906 9.33472V14.8604C6.28906 15.8072 7.05657 16.5747 8.00335 16.5747H16.0033C16.9501 16.5747 17.7176 15.8072 17.7176 14.8604V9.33472L12.5748 12.3404Z" fill="white"></path> </svg> </div></a> </div></div></div></div></div></footer></div></body><style>.Footer{padding-top:24px}@media(max-width:833px){.Footer{padding-top:20px}}.Footer--with-offset{margin-top:100px}@media(max-width:1279px){.Footer--with-offset{margin-top:78px}}@media(max-width:833px){.Footer--with-offset{margin-top:52px}}.Footer--with-small-offset{margin-top:46px}@media(max-width:1439px){.Footer--with-small-offset{margin-top:26px}}@media(max-width:833px){.Footer--with-small-offset{margin-top:16px}}.Footer .Logo{margin-top:-3px}@media(max-width:733px){.Footer .Logo{margin-top:0;margin-left:2px}}@media(max-width:413px){.Footer .Logo{margin-left:-2px}}.Footer .Logo__inner--large{display:block}@media(max-width:1023px){.Footer .Logo__inner--large{display:none}}.Footer .Logo__inner--small{display:none}@media(max-width:1023px){.Footer .Logo__inner--small{display:block}}.Footer__links{position:relative;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;padding-bottom:38px}@media(max-width:1439px){.Footer__links{padding-bottom:22px}}@media(max-width:1279px){.Footer__links{padding-bottom:24px}}@media(max-width:733px){.Footer__links{justify-content:space-between;margin:0 0 -24px;padding-top:50px}}.Footer__col{box-sizing:border-box;width:13.0666666667%}@media(max-width:1279px){.Footer__col{width:14.1666666667%}}@media(max-width:733px){.Footer__col{width:48%;margin-bottom:24px;padding:0}.Footer__col--logo{position:absolute;top:0;left:0}}.Footer__col_header{font-weight:700;font-size:18px}@media(max-width:1279px){.Footer__col_header{font-size:16px}}.Footer__col_link_wrap{margin-top:2px}@media(max-width:1279px){.Footer__col_link_wrap{margin-top:4px}}@media(max-width:733px){.Footer__col_link_wrap{margin-top:8px}}.Footer__col_link{color:var(--text_light_secondary)}.Footer__col_link .Text{font-size:15px}@media(max-width:1023px){.Footer__col_link .Text{font-size:14px}}@media(max-width:733px){.Footer__col_link .Text{font-size:16px}}.Footer__copyrights{display:flex;align-items:center;justify-content:space-between;padding:24px 0 40px;border-top:1px solid var(--separator_light)}@media(max-width:1279px){.Footer__copyrights{padding:26px 0 46px}}@media(max-width:1023px){.Footer__copyrights{padding:16px 0 36px}}@media(max-width:733px){.Footer__copyrights{flex-direction:row;align-items:flex-start;padding-top:24px}}.Footer__copyrights_left{display:flex;align-items:center;margin-top:-3px}.Footer__copyrights_left,.Footer__copyrights_left a{color:var(--text_light_secondary)}.Footer__networks{display:flex;align-items:flex-start;margin:0 -6px}@media(max-width:1279px){.Footer__networks{margin:0 -6px}}@media(max-width:733px){.Footer__networks{margin:0 -4px}}.Footer__network{margin:0 6px;color:var(--icon_light_thirdly)}@media(max-width:1279px){.Footer__network{margin:0 6px}}@media(max-width:733px){.Footer__network{margin:0 4px}}.Footer__col_link,.Footer__copyrights_link{cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Footer__col_link:hover,.Footer__copyrights_link:hover{color:var(--button_light_primary)}}.Footer__network{cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Footer__network:hover{color:var(--ton_blue)}}.Button{box-sizing:border-box;display:inline-block;padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center;cursor:pointer;background:none;transform:translateZ(0);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.Button:disabled{pointer-events:none}.Button--round{border-radius:40px}.Button--m-primary{padding:16px 32px}@media(max-width:1279px){.Button--m-primary{padding:16px 24px}}@media(max-width:733px){.Button--m-primary{padding:12px 16px}}.Button--m-primary.Button--s-light{color:var(--default_white);background-color:var(--button_dark_primary);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-primary.Button--s-light:hover{background-color:var(--button_light_primary_hover)}.Button--m-primary.Button--s-light:active{background-color:var(--button_light_primary_pressed)}.Button--m-primary.Button--s-light:disabled{opacity:.2}}.Button--m-primary.Button--s-dark{color:var(--default_white);background-color:var(--button_dark_primary);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-primary.Button--s-dark:hover{background-color:var(--button_dark_primary_hover)}.Button--m-primary.Button--s-dark:active{background-color:var(--button_dark_primary_pressed)}.Button--m-primary.Button--s-dark:disabled{opacity:.5}}.Button--size-small{padding:1px 12px;border-radius:24px;line-height:24px;font-weight:500;font-size:16px}@media(max-width:1279px){.Button--size-small{padding:2px 12px}}.Button--m-primary.Button--size-small{background:var(--button_light_primary_small)}.Button--m-primary.Button--size-small.Button--s-light{color:var(--button_light_primary);background-color:var(--button_light_primary_small);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-primary.Button--size-small.Button--s-light:hover{background-color:var(--button_light_primary_small_hover)}.Button--m-primary.Button--size-small.Button--s-light:active{background-color:var(--button_light_primary_small_pressed)}.Button--m-primary.Button--size-small.Button--s-light:disabled{opacity:.2}}.Button--m-secondary:disabled{opacity:.5}.Button--m-secondary.Button--s-light{padding:8px 20px;color:var(--ton_blue);background-color:var(--background_light_main);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary.Button--s-light:hover{background-color:var(--background_light_main)}.Button--m-secondary.Button--s-light:active{color:var(--button_dark_text);background-color:var(--button_light_secondary_pressed)}}.Button--m-secondary.Button--s-dark{padding:16px 32px;color:var(--default_white);background-color:var(--button_dark_secondary);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media(max-width:1279px){.Button--m-secondary.Button--s-dark{padding:16px 24px}}@media(max-width:733px){.Button--m-secondary.Button--s-dark{padding:12px 16px}}@media screen and (min-width:1000px){.Button--m-secondary.Button--s-dark:hover{background-color:var(--button_dark_secondary_hover)}.Button--m-secondary.Button--s-dark:active{background-color:var(--button_dark_secondary_pressed)}}.Button--m-secondary-long:disabled{opacity:.5}.Button--m-secondary-long.Button--s-light{padding:16px 32px;color:var(--ton_blue);background-color:var(--background_light_main);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary-long.Button--s-light:hover{opacity:.72}}@media(max-width:1279px){.Button--m-secondary-long.Button--s-light{padding:16px 24px}}@media(max-width:733px){.Button--m-secondary-long.Button--s-light{padding:12px 16px}}@media screen and (min-width:1000px){.Button--m-secondary-long.Button--s-light:hover{background-color:var(--background_light_main)}.Button--m-secondary-long.Button--s-light:active{color:var(--button_dark_text);background-color:var(--button_light_secondary_pressed)}}.Button--m-secondary-long.Button--s-dark{padding:16px 32px;color:var(--default_white);background-color:var(--button_dark_secondary);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media(max-width:1279px){.Button--m-secondary-long.Button--s-dark{padding:16px 24px}}@media(max-width:733px){.Button--m-secondary-long.Button--s-dark{padding:12px 16px}}@media screen and (min-width:1000px){.Button--m-secondary-long.Button--s-dark:hover{background-color:var(--button_dark_secondary_hover)}.Button--m-secondary-long.Button--s-dark:active{background-color:var(--button_dark_secondary_pressed)}}.Button--m-secondary-long-long{padding:16px 32px}.Button--m-secondary-text{border-radius:0}.Button--m-secondary-text.Button--s-light{color:var(--button_light_primary);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary-text.Button--s-light:hover{color:var(--button_light_primary_hover)}.Button--m-secondary-text.Button--s-light:active{color:var(--button_light_primary_pressed)}.Button--m-secondary-text.Button--s-light:disabled{opacity:.2}}.Button--m-secondary-text.Button--s-dark{color:var(--button_dark_text);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary-text.Button--s-dark:hover{color:var(--button_dark_secondary_text_hover)}.Button--m-secondary-text.Button--s-dark:active{color:var(--button_dark_secondary_text_pressed)}.Button--m-secondary-text.Button--s-dark:disabled{opacity:.5}}.Button--m-secondary-text-overlay{border-radius:0}.Button--m-secondary-text-overlay.Button--s-dark{color:var(--default_white);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary-text-overlay.Button--s-dark:hover{opacity:.72}.Button--m-secondary-text-overlay.Button--s-dark:active{opacity:.64}}.Button--m-secondary-outline:disabled,.Button--m-secondary-text-overlay.Button--s-dark:disabled{opacity:.5}.Button--m-secondary-outline.Button--s-light{color:var(--default_white);background-color:transparent;cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-secondary-outline.Button--s-light:hover{background-color:transparent;opacity:.7}}.Button--m-menu{border-radius:0}.Button--m-menu.Button--s-dark{color:var(--black);cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Button--m-menu.Button--s-dark:hover{color:var(--button_light_primary_hover)}.Button--m-menu.Button--s-dark:active{color:var(--button_light_primary_pressed)}.Button--m-menu.Button--s-dark:disabled{opacity:.2}}.Button__inner{display:flex;align-items:center;justify-content:center;width:100%}.Button__before{margin-right:8px}.Button__before--arrow{margin:0}.Button__after{margin-left:5px}.Button__after--arrow{margin:0}a.Button{display:inline-flex}.Title{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:800}.Title--l-1{font-size:72px;line-height:88px}@media(max-width:1279px){.Title--l-1{font-size:48px;line-height:56px}}@media(max-width:833px){.Title--l-1{font-size:34px;line-height:44px}}.Title--l-2{font-size:56px;line-height:64px}@media(max-width:1023px){.Title--l-2{font-size:40px;line-height:48px}}@media(max-width:733px){.Title--l-2{font-size:32px;line-height:40px}}.Title--l-3{font-size:48px;line-height:56px}@media(max-width:1279px){.Title--l-3{font-size:36px;line-height:40px}}@media(max-width:833px){.Title--l-3{font-size:28px;line-height:36px}}.Title--l-4{font-size:28px;line-height:38px}@media(max-width:1439px){.Title--l-4{line-height:36px}}@media(max-width:1279px){.Title--l-4{font-size:24px;line-height:32px}}@media(max-width:833px){.Title--l-4{font-size:20px}}@media(max-width:733px){.Title--l-4{font-size:18px}}@media(max-width:413px){.Title--l-4{font-size:16px;line-height:24px}}.Title--l-5{font-size:24px;line-height:32px}@media(max-width:1279px){.Title--l-5{font-size:20px;line-height:28px}}@media(max-width:833px){.Title--l-5{font-size:18px}}.Title--l-6{font-size:20px;line-height:30px}@media(max-width:733px){.Title--l-6{font-size:14px}}.Title--t-alternative.Title--l-3{font-size:48px;line-height:56px}@media(max-width:1023px){.Title--t-alternative.Title--l-3{font-size:36px;line-height:40px}}@media(max-width:733px){.Title--t-alternative.Title--l-3{font-size:28px;line-height:36px}}.Title--t-footer{font-size:18px;font-weight:700;line-height:28px}@media(max-width:1279px){.Title--t-footer{font-size:16px;line-height:24px}}.Title--t-developer{font-weight:700;font-family:IBMPlexMono,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Text{font-weight:400}.Text--l-1{font-size:20px;line-height:30px}@media(max-width:1279px){.Text--l-1{font-size:16px;line-height:24px}}.Text--l-2{font-size:16px;line-height:24px}@media(max-width:833px){.Text--l-2{line-height:20px}}.Text--t-default{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Text--t-developer{font-family:IBMPlexMono,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Text--t-secondary{color:var(--text_light_secondary)}.Text__fluid{width:100%}.Text__bold{font-weight:700}.Headline--l-1{font-size:24px;font-weight:800;line-height:32px}@media(max-width:1279px){.Headline--l-1{font-size:20px;line-height:28px}}@media(max-width:833px){.Headline--l-1{font-size:18px}}.Headline--l-2{font-size:20px;font-weight:800;line-height:30px}@media(max-width:1279px){.Headline--l-2{font-size:18px;line-height:28px}}@media(max-width:833px){.Headline--l-2{font-size:16px;line-height:24px}}.Headline--l-2.Headline--t-developer{font-size:28px;font-weight:700;line-height:36px}@media(max-width:833px){.Headline--l-2.Headline--t-developer{font-size:18px;line-height:28px}}.Headline--t-default{font-family:Mulish,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Headline--t-developer{font-family:IBMPlexMono,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Caption{font-family:Mulish,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.Caption--l-1{font-weight:500;font-size:14px;line-height:20px}@media(max-width:833px){.Caption--l-1{font-size:10px;line-height:14px}}.Caption--t-footer{font-size:14px;line-height:24px}@media(max-width:1023px){.Caption--t-footer{font-size:12px}}@media(max-width:733px){.Caption--t-footer{line-height:20px}}.Caption--t-secondary{color:var(--text_light_secondary)}.BigNumbers{font-family:Mulish,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;font-size:40px;line-height:56px}@media(max-width:1279px){.BigNumbers{font-size:28px;line-height:38px}}@media(max-width:833px){.BigNumbers{font-size:28px;line-height:36px}}.ButtonText.ellipsis{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ButtonText--l-1{font-size:18px;line-height:32px;font-weight:800}@media(max-width:1279px){.ButtonText--l-1{font-size:15px;line-height:24px}}@media(max-width:833px){.ButtonText--l-1{font-size:14px}}.ButtonText--l-2{font-size:18px;line-height:28px;font-weight:700}@media(max-width:833px){.ButtonText--l-2{font-size:14px}}.ButtonText--t-default,.ButtonText--t-menu{font-family:Mulish,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700}.ButtonText--t-menu.ButtonText--l-1{font-size:18px;line-height:32px}@media(max-width:833px){.ButtonText--t-menu.ButtonText--l-1{line-height:28px}}.ButtonText--t-menu.ButtonText--l-2{font-size:18px;line-height:24px}@media(max-width:833px){.ButtonText--t-menu.ButtonText--l-2{font-size:16px;line-height:22px}}.ButtonText--t-developer{font-family:IBMPlexMono,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700}.ButtonText--t-badge{font-weight:700}.Badge__inner{font-size:18px;font-weight:500;line-height:20px;box-sizing:border-box;display:inline-block;margin-bottom:16px;padding:3px 11px;text-align:center;text-transform:uppercase;color:var(--text_light_secondary);border:1px solid var(--text_light_secondary);border-radius:8px}@media(max-width:1023px){.Badge__inner{font-size:16px;margin-bottom:8px;padding:1px 10px}}@media(max-width:833px){.Badge__inner{margin-bottom:4px}}@media(max-width:733px){.Badge__inner{margin-bottom:16px;margin-bottom:8px}}.Container,.Container__inner{box-sizing:border-box;width:100%}.Container__inner{max-width:calc(100% - 32px);min-width:calc(100% - 32px);margin:0 auto}@media(min-width:734px){.Container__inner{max-width:calc(100% - 80px);min-width:calc(100% - 80px)}}@media(min-width:1024px){.Container__inner{max-width:936px;min-width:936px}}@media(min-width:1280px){.Container__inner{max-width:1120px;min-width:1120px}}.Container.size--small .Container__inner{max-width:calc(100% - 32px);min-width:calc(100% - 32px)}@media(min-width:734px){.Container.size--small .Container__inner{max-width:calc(100% - 80px - 64px - (100% - 80px - 176px)/12*4);min-width:calc(100% - 80px - 64px - (100% - 80px - 176px)/12*4)}}@media(min-width:1024px){.Container.size--small .Container__inner{max-width:616px;min-width:616px}}@media(min-width:1280px){.Container.size--small .Container__inner{max-width:736px;min-width:736px}}.Note{position:relative;margin:48px 0;padding:10px 45px 10px 24px;color:var(--text_light_secondary);background-color:var(--background_light_main)}@media(max-width:1023px){.Note{margin:32px 0;padding:8px 24px}}@media(max-width:833px){.Note{margin:24px 0;padding:10px 16px}}.Note:before{position:absolute;top:0;left:0;display:block;width:4px;height:100%;content:"";border-radius:10px;background-color:var(--ton_blue)}.Note--m-lastBlock{margin:48px 0 0}@media(max-width:1023px){.Note--m-lastBlock{margin:32px 0 0}}@media(max-width:833px){.Note--m-lastBlock{margin:24px 0 0}}.TabsItem{position:relative;display:inline-block;padding-bottom:11px;text-align:center;margin-bottom:-2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}.TabsItem:before{position:absolute;bottom:0;left:0;display:block;width:100%;height:3px;content:"";border-radius:10px;background-color:transparent;transition:background-color .2s ease-in-out}.TabsItem+.TabsItem{margin-left:40px}@media(max-width:1023px){.TabsItem+.TabsItem{margin-left:16px}}.TabsItem--active:before{background-color:var(--button_dark_text)}.TabsItem--light{color:var(--text_light_secondary)}.TabsItem--light.TabsItem--active{color:var(--text_light_primary)}.TabsItem--dark{color:var(--text_dark_secondary)}.TabsItem--dark.TabsItem--active{color:var(--text_dark_primary)}@media screen and (min-width:1000px){.TabsItem:not(.TabsItem--active):active:before,.TabsItem:not(.TabsItem--active):hover:before{background-color:var(--button_dark_secondary_hover)}}@media(max-width:1279px){.NetworkIcon--large{display:none}}.NetworkIcon--small{display:none}@media(max-width:1279px){.NetworkIcon--small{display:block}}.Logo{position:relative;cursor:pointer;transition:color .2s ease-in-out}.Logo,.Logo__inner{display:block}@media(max-width:1279px){.Logo__inner--large{display:none}}.Logo__inner--small{display:none}@media(max-width:1279px){.Logo__inner--small{display:block}}.Logo--dark{color:var(--default_black)}.Logo--light{color:var(--default_white)}@-webkit-keyframes shine-lines{0%{background-position:-400px}to{background-position:440px}}@keyframes shine-lines{0%{background-position:-400px}to{background-position:440px}}.HideByMediaBlock{display:var(--xxlVisible)}@media(max-width:1439px){.HideByMediaBlock{display:var(--xxlVisible)}}@media(max-width:1279px){.HideByMediaBlock{display:var(--xlVisible)}}@media(max-width:1023px){.HideByMediaBlock{display:var(--lVisible)}}@media(max-width:833px){.HideByMediaBlock{display:var(--mVisible)}}@media(max-width:733px){.HideByMediaBlock{display:var(--sVisible)}}@media(max-width:568px){.HideByMediaBlock{display:var(--preSVisible)}}@media(max-width:413px){.HideByMediaBlock{display:var(--xsVisible)}}@-webkit-keyframes shine-lines{0%{background-position:-400px}to{background-position:440px}}@keyframes shine-lines{0%{background-position:-400px}to{background-position:440px}}.TooltipContainer{position:absolute;top:0;left:0;right:0;bottom:0}.tooltipItem{position:absolute;top:0;left:0;min-width:100px;min-height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;z-index:10000000;box-sizing:border-box;transition:opacity .2s ease-in-out,transform .2s ease-in-out,visibility .2s ease-in-out}.tooltipItem__inner{padding:12px;border-radius:14px;position:relative;background:var(--default_white)}@media(max-width:833px){.tooltipItem__inner{font-size:12px}}.tooltipItem__inner--default{padding:12px;background:var(--modal_tooltip);box-shadow:0 0 2px rgba(0,0,0,.08),0 2px 24px rgba(0,0,0,.08)}.tooltipItem.showArrow .tooltipItem__inner--comics:after{content:""}.tooltipItem__inner--comics{padding:16px;max-width:400px;border-radius:16px;background:var(--default_white);box-shadow:0 4px 24px rgba(0,0,0,.08);border:1px solid rgba(27,31,35,.12);box-sizing:border-box}@media(max-width:733px){.tooltipItem__inner--comics{max-width:200px}}.tooltipItem__inner--comics:after{position:absolute;left:calc(100% - 7px);top:calc(var(--comics-height)/2 - 6px);transform:rotate(45deg);background:#fff;border-color:rgba(27,31,35,.12) rgba(27,31,35,.12) #fff #fff;border-style:solid;border-width:1px;height:12px;width:12px;border-radius:0 2px 0 0;z-index:2}.tooltipItem--hor-right-after .tooltipItem__inner--comics:after{left:-7px;border-color:#fff #fff rgba(27,31,35,.12) rgba(27,31,35,.12);border-style:solid;border-width:1px;border-radius:0 0 0 2px}.tooltipItem--hor-center.tooltipItem--ver-top .tooltipItem__inner--comics:after{left:50%;top:calc(100% - 7px);border-color:#fff rgba(27,31,35,.12) rgba(27,31,35,.12) #fff;border-style:solid;border-width:1px;border-radius:0 0 2px 0}.tooltipItemContainer{width:16px;display:inline-flex;height:16px;position:relative;padding:0 0 0 2px}.tooltipItemContainer button{position:absolute;bottom:-2px}@-webkit-keyframes inAnimation{0%{opacity:0}to{opacity:1}}@-webkit-keyframes outAnimation{0%{opacity:1}to{opacity:0}}.modalContainer{right:0;bottom:0}.modalContainer,.modalItem{position:absolute;top:0;left:0}.modalItem{min-width:100px;min-height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;z-index:10000000;box-sizing:border-box;transition:opacity .2s ease-in-out,transform .2s ease-in-out,visibility .2s ease-in-out}.modalItem__inner{padding:12px;border-radius:14px;position:relative;background:var(--default_white)}@media(max-width:833px){.modalItem__inner{font-size:12px}}.modalItem__inner--full-screen{background:#3f3f43;padding:0 40px 40px;border-radius:24px;box-shadow:0 4px 24px rgba(0,0,0,.08);border:1px solid rgba(27,31,35,.12);box-sizing:border-box;width:var(--full-screen-modal-width);max-height:var(--full-screen-modal-height);overflow-y:scroll}@media(max-width:1279px){.modalItem__inner--full-screen{padding:0 30px 32px}}@media(max-width:833px){.modalItem__inner--full-screen{padding:0 24px 24px}}.modalShadowBg{width:100%;height:100%;position:absolute;left:0;background:rgba(35,35,40,.8);z-index:10}.modalItem__head{position:-webkit-sticky;position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;background:#3f3f43;padding-top:40px;z-index:10;transition:padding .2s ease-in-out}.modalItem__head--m-scrolled{padding-top:24px;padding-bottom:24px}@media(max-width:1279px){.modalItem__head--m-scrolled{padding-top:32px}}@media(max-width:833px){.modalItem__head--m-scrolled{padding-top:24px}}@media(max-width:1279px){.modalItem__head{padding-top:32px}}@media(max-width:833px){.modalItem__head{padding-top:24px}}@media(max-width:1279px){.modalItem__head{margin-bottom:24px}}.modalExitIcon{width:24px;height:24px;cursor:pointer}@media(max-width:1279px){.modalExitIcon{top:34px;right:30px}}@media(max-width:833px){.modalExitIcon{top:26px;right:24px}}.modalExitIcon .ButtonText{color:var(--default_white);transition:color .2s ease-in-out}@media screen and (min-width:1000px){.modalExitIcon:hover .ButtonText{color:var(--button_dark_secondary_hover)}}@keyframes inAnimation{0%{opacity:0}to{opacity:1}}@keyframes outAnimation{0%{opacity:1}to{opacity:0}}.preload *{-webkit-transition:none!important;-moz-transition:none!important;-ms-transition:none!important;-o-transition:none!important}body{display:flex;flex-direction:column}a{text-decoration:none}svg{display:block}button{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-style:normal;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;padding:0;border:none;background:none;outline:none}::selection{background:var(--icon_light_secondary)}::-moz-selection{background:var(--icon_light_secondary)}.row{display:flex}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.between{justify-content:space-between}.textLeft{text-align:left}.layoutUnderArr{z-index:-1!important}.Text .Markdown__link{color:inherit!important;border-bottom-color:inherit;cursor:pointer;transition:color .2s ease-in-out,background-color .2s ease-in-out,opacity .2s ease-in-out}@media screen and (min-width:1000px){.Text .Markdown__link:hover{color:var(--hovered_link)!important;border-bottom-color:var(--hovered_link);opacity:.8}}.hiddenBlock{overflow:hidden;height:0;z-index:-1;transition:height .2s ease-in-out}.hiddenBlock--m-expanded{height:auto;z-index:1}.AccordionAnchorElement{position:relative;top:-100px}@font-face{font-family:Inter;font-style:normal;font-weight:800;font-display:block;src:url(/_next/static/media/Mulish-ExtraBold.49add491.woff2) format("woff2")}@font-face{font-family:Mulish;font-style:normal;font-weight:700;font-display:block;src:url(/_next/static/media/Mulish-Bold.50defa2a.woff2) format("woff2")}@font-face{font-family:Mulish;font-style:normal;font-weight:500;font-display:block;src:url(/_next/static/media/Mulish-Medium.36e04c25.woff2) format("woff2")}@font-face{font-family:Mulish;font-style:normal;font-weight:400;font-display:block;src:url(/_next/static/media/Mulish-Regular.f4910cec.woff2) format("woff2")}@font-face{font-family:IBMPlexMono;font-style:normal;font-weight:700;font-display:block;src:url(/_next/static/media/IBMPlexMono-Bold.d6705808.woff2) format("woff2")}@font-face{font-family:IBMPlexMono;font-style:normal;font-weight:400;font-display:block;src:url(/_next/static/media/IBMPlexMono-Regular.9d49d570.woff2) format("woff2")}body{--ton_blue:#2188ff;--ton_dark_blue:#2188ff;--default_white:#fff;--default_black:#161c28;--toncoin_header:#353538;--toncoin_gradient:linear-gradient(297.97deg,#232328 9.93%,#343437 76.88%)}body,body[data-theme=light]{--background_light_main:#f7f9fb;--background_light_gradient:linear-gradient(180deg,#f7f9fb,rgba(238,242,245,0.8) 116.16%);--background_light_icon:rgba(0,136,204,0.06);--background_light_blue:rgba(0,136,204,0.1);--background_dark_main:#232328;--background_dark_gradient:linear-gradient(0deg,#232328,#343437 101.47%);--background_dark_secondary:hsla(0,0%,100%,0.03);--background_gradient_light:linear-gradient(180deg,#fff,#f7f9fb 134.8%);--background_green_light:#829a94;--background_black_mini_opacity:rgb(0,0,0,0.24);--background_loading_gradient_light:linear-gradient(90deg,#f7f9fb -9.69%,#f2f5f8 -9.68%,#fff 52.19%,#f2f5f8 106.56%);--button_light_primary:#2188ff;--button_light_primary_hover:#0197e2;--button_light_primary_pressed:#0082c2;--button_light_secondary:rgba(246,248,251,0.8);--button_light_secondary_hover:#f4f7fa;--button_light_secondary_pressed:#f4f7fa;--button_dark_primary:#2188ff;--button_dark_primary_hover:#00a1f1;--button_dark_primary_pressed:#076c9f;--button_dark_secondary:hsla(0,0%,100%,0.06);--button_dark_secondary_hover:hsla(0,0%,100%,0.12);--button_dark_secondary_pressed:hsla(0,0%,100%,0.03);--button_dark_text:#07a0ec;--button_dark_secondary_text_hover:#5bc8ff;--button_dark_secondary_text_pressed:#0186c9;--button_light_primary_small:rgba(0,136,204,0.06);--button_light_primary_small_hover:rgba(0,136,204,0.3);--button_light_primary_small_pressed:rgba(0,136,204,0.03);--text_light_primary:#161c28;--text_light_secondary:#1b1f23;--text_dark_primary:#fff;--text_dark_secondary:hsla(0,0%,100%,0.7);--text_dark_gradient:linear-gradient(89.92deg,#06a1ef 28.51%,#2188ff 85.79%);--icon_light_primary:#2188ff;--icon_light_secondary:rgba(236,240,243,0.8);--icon_light_thirdly:#98b2bf;--icon_dark_primary:#02a8fb;--separator_light:rgba(123,148,160,0.2);--separator_dark:hsla(0,0%,100%,0.06);--black:#000;--covers_light_green:#caefd9;--hovered_link:#2188ff;--light_border:rgba(27,31,35,0.24)}</style></html>`;
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metaspace',
  tagline: 'Free metaverse focusing on The Open Network, no strings attached. Take control of your online communities with a fully open source virtual world platform that you can make your own.',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-live-codeblock',
    // [
    //   require.resolve('@easyops-cn/docusaurus-search-local'),
    //   {
    //     // ... Your options.
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     indexPages: true,
    //     indexBlog: false,
    //     searchBarShortcutHint: false,
    //     // For Docs using Chinese, The `language` is recommended to set to:
    //     // ```
    //     // language: ["en", "zh"],
    //     // ```
    //   },
    // ],
  ],

  // Set the production url of your site here
  url: 'https://tonmetaspace.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tonmetaspace', // Usually your GitHub org/user name.
  projectName: 'metaspace.ton', // Usually your repo name.


  stylesheets: [
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
  ],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'G-0E7KS06VS6',
          anonymizeIP: true,
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],],
          rehypePlugins: [katex],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tonmetaspace/metaspace.ton/',
        },
        blog: {
          blogTitle: 'Metaspace blog!',
          blogDescription: 'A Metaspace powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tonmetaspace/metaspace.ton/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
  // whether to index docs pages
  indexDocs: true,

  // Whether to also index the titles of the parent categories in the sidebar of a doc page.
  // 0 disables this feature.
  // 1 indexes the direct parent category in the sidebar of a doc page
  // 2 indexes up to two nested parent categories of a doc page
  // 3...
  //
  // Do _not_ use Infinity, the value must be a JSON-serializable integer.
  indexDocSidebarParentCategories: 0,

  // whether to index blog pages
  indexBlog: true,

  // whether to index static pages
  // /404.html is never indexed
  indexPages: true,

  // language of your documentation, see next section
  language: "en",

  // setting this to "none" will prevent the default CSS to be included. The default CSS
  // comes from autocomplete-theme-classic, which you can read more about here:
  // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
  // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
  // overwrites with `!important`, because they might otherwise not be applied as expected. See the
  // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
  style: undefined,

  // The maximum number of search results shown to the user. This does _not_ affect performance of
  // searches, but simply does not display additional search results that have been found.
  maxSearchResults: 8,

  // lunr.js-specific settings
  lunr: {
    // When indexing your documents, their content is split into "tokens".
    // Text entered into the search box is also tokenized.
    // This setting configures the separator used to determine where to split the text into tokens.
    // By default, it splits the text at whitespace and dashes.
    //
    // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
    tokenizerSeparator: /[\s\-]+/,
    // https://lunrjs.com/guides/customising.html#similarity-tuning
    //
    // This parameter controls the importance given to the length of a document and its fields. This
    // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
    // reduces the effect of different length documents on a term’s importance to that document.
    b: 0.75,
    // This controls how quickly the boost given by a common word reaches saturation. Increasing it
    // will slow down the rate of saturation and lower values result in quicker saturation. The
    // default value is 1.2. If the collection of documents being indexed have high occurrences
    // of words that are not covered by a stop word filter, these words can quickly dominate any
    // similarity calculation. In these cases, this value can be reduced to get more balanced results.
    k1: 1.2,
    // By default, we rank pages where the search term appears in the title higher than pages where
    // the search term appears in just the text. This is done by "boosting" title matches with a
    // higher value than content matches. The concrete boosting behavior can be controlled by changing
    // the following settings.
    titleBoost: 5,
    contentBoost: 1,
    tagsBoost: 3,
    parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
  }
}
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'Metaspace',
        logo: {
          alt: 'Metaspace Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/README',
            position: 'left',
            label: 'Docs',
          },
          { to: 'meta', label: 'Metaverse', position: 'left' },
          {to: 'quest', label: 'Quests', position: 'left'},
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/tonmetaspace',

            position: 'right',
          },
        ],
        
      },
      footer: {
         style: 'dark',
        links: [
          {
            items: [
              {
                html: newLocal,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      additionalLanguages: [
          'java',
          'python',
          'kotlin',
          'go',
          'typescript',
          'cpp',
          'c',
        ],
      liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
        playgroundPosition: 'bottom',
    },
    }),
};

module.exports = config;
