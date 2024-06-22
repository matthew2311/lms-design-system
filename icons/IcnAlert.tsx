import React from 'react';
import { SweetAlertType } from 'react-bootstrap-sweetalert/dist/types';

interface IIcnAlertType {
  type?: SweetAlertType | 'erroroval' | 'warning-flat';
  width?: string;
  height?: string;
}

const IcnAlert = (props: IIcnAlertType) => {
  switch (props.type) {
    case 'erroroval':
      return (
        <svg width={props.width || "180px"} height={props.height || "180px"} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>icn-status-failed</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="20210609-web-binusmaya-login-page-2-get-username-alert" transform="translate(-761.000000, -331.000000)" fill="#D12119">
              <g id="Group-5" transform="translate(213.000000, 251.000000)">
                <g id="Group-7-Copy-2" transform="translate(422.000000, 0.000000)">
                  <path d="M176,80 C203.614237,80 226,102.385763 226,130 C226,157.614237 203.614237,180 176,180 C148.385763,180 126,157.614237 126,130 C126,102.385763 148.385763,80 176,80 Z M195.964286,105 L176,124.964286 L156.035714,105 L151,110.035714 L170.964286,130 L151,149.964286 L156.035714,155 L176,135.035714 L195.964286,155 L201,149.964286 L181.035714,130 L201,110.035714 L195.964286,105 Z" id="icn-status-failed" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      );

    case 'error':
      return (
        <svg width={props.width || "180px"} height={props.height || "180px"} viewBox="0 0 120 106" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>icn-error</title>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <stop stopColor="#F5515F" offset="0%"></stop>
              <stop stopColor="#9F041B" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop" transform="translate(-637.000000, -544.000000)">
              <g id="Group-6" transform="translate(522.000000, 511.000000)">
                <g id="icn-error" transform="translate(115.000000, 33.000000)">
                  <path d="M66.9620548,12.2996302 L113.241065,94.0592142 C115.417501,97.904251 114.064832,102.785619 110.219796,104.962055 C109.017823,105.642417 107.66018,106 106.27901,106 L13.7209902,106 C9.30271218,106 5.72099018,102.418278 5.72099018,98 C5.72099018,96.6188302 6.07857355,95.2611867 6.75893534,94.0592142 L53.0379452,12.2996302 C55.214381,8.4545935 60.095749,7.10192526 63.9407858,9.27836114 C65.2031625,9.99291401 66.247502,11.0372535 66.9620548,12.2996302 Z" id="Triangle-Copy" fill="url(#linearGradient-1)" />
                  <polygon id="Path" fill="#FFFFFF" fillRule="nonzero" points="80 54.0285714 75.9714284 50 60 65.9714284 44.0285714 50 40 54.0285714 55.9714284 70 40 85.9714284 44.0285714 90 60 74.0285716 75.9714284 90 80 85.9714284 64.0285716 70"></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );

    case 'info':
      return (
        <svg width={props.width || "180px"} height={props.height || "180px"} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>icn-info</title>
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
              <stop stopColor="#016699" offset="0%"></stop>
              <stop stopColor="#34A4DC" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop" transform="translate(-647.000000, -141.000000)">
              <g id="icn-info" transform="translate(647.000000, 141.000000)">
                <circle id="Oval-Copy" fill="url(#linearGradient-1)" cx="50" cy="50" r="50"></circle>
                <path d="M56.8,69.2 L56.8,82 L44,82 L44,69.2 L56.8,69.2 Z M56.8,18 L56.8,56.4 L44,56.4 L44,18 L56.8,18 Z" id="Combined-Shape" fill="#FFFFFF" fillRule="nonzero" transform="translate(50.400000, 50.000000) scale(1, -1) translate(-50.400000, -50.000000)" />
              </g>
            </g>
          </g>
        </svg>
      );

    case 'success':
      return (
        <svg width={props.width || "180px"} height={props.height || "180px"} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>icn-success</title>
          <defs>
            <linearGradient x1="50%" y1="0.546347128%" x2="50%" y2="100%" id="linearGradient-1">
              <stop stopColor="#92C569" offset="0%"></stop>
              <stop stopColor="#53802E" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop" transform="translate(-277.000000, -141.000000)">
              <g id="Group-4" transform="translate(152.000000, 101.000000)">
                <g id="icn-success" transform="translate(125.000000, 40.000000)">
                  <circle id="Oval" fill="url(#linearGradient-1)" cx="50" cy="50" r="50"></circle>
                  <polygon id="Path" fill="#FFFFFF" points="40.8571429 73 18 50.9270633 24.4457143 44.7024952 40.8571429 60.5067179 75.5542857 27 82 33.268714"></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );

    case 'warning':
      return (
        <svg width={props.width || "180px"} height={props.height || "180px"} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>icn-warning</title>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <stop stopColor="#F7CA19" offset="0%"></stop>
              <stop stopColor="#F3931B" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop" transform="translate(-277.000000, -551.000000)">
              <g id="icn-warning" transform="translate(277.000000, 551.000000)">
                <circle id="Oval-Copy" fill="url(#linearGradient-1)" cx="50" cy="50" r="50"></circle>
                <path d="M56.8,69.2 L56.8,82 L44,82 L44,69.2 L56.8,69.2 Z M56.8,18 L56.8,56.4 L44,56.4 L44,18 L56.8,18 Z" id="Combined-Shape" fill="#FFFFFF" fillRule="nonzero" />
              </g>
            </g>
          </g>
        </svg>
      )

    case 'warning-flat':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g id="Group_1535" data-name="Group 1535" transform="translate(-712 -314)">
            <circle id="Oval_Copy_3" data-name="Oval Copy 3" cx="12" cy="12" r="12" transform="translate(712 314)" fill="#f18700" />
            <path id="_" data-name="!" d="M.869,11.888A1.351,1.351,0,0,1,.4,11.576a1.406,1.406,0,0,1-.3-.474,1.642,1.642,0,0,1-.105-.6,1.682,1.682,0,0,1,.105-.6,1.391,1.391,0,0,1,.3-.479,1.424,1.424,0,0,1,.466-.317,1.579,1.579,0,0,1,.619-.116,1.555,1.555,0,0,1,.61.116,1.365,1.365,0,0,1,.764.8,1.682,1.682,0,0,1,.105.6,1.642,1.642,0,0,1-.105.6,1.406,1.406,0,0,1-.3.474,1.326,1.326,0,0,1-.466.312,1.579,1.579,0,0,1-.61.112A1.6,1.6,0,0,1,.869,11.888ZM.371,7,.049,0H3L2.674,7Z" transform="translate(722.501 320)" fill="#fff" />
          </g>
        </svg>
      )

    default:
      return <></>;
  }
};

export default IcnAlert;
