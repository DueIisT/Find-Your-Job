export const Statistics = ({iconColor}) => {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${iconColor}`}
      stroke={`${iconColor}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs></defs>
        <line className="a" x1="2" x2="22" y1="20" y2="20"></line>
        <path
          className="a"
          d="M5,20V8.2A.2.2,0,0,1,5.2,8H7.8a.2.2,0,0,1,.2.2V20"
        ></path>
        <path
          className="a"
          d="M11,20V4.26667C11,4.11939,11.08954,4,11.2,4h2.6c.11046,0,.2.11939.2.26667V20"
        ></path>
        <path
          className="a"
          d="M17,20V11.15c0-.08284.08954-.15.2-.15h2.6c.11046,0,.2.06716.2.15V20"
        ></path>
      </g>
    </svg>
  );
};
