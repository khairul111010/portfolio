import Link from "next/link";
import React from "react";

// interface Props {
//   text: string;
//   height?: string;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const ButtonAnimated: React.FC<Props> = ({
//   text,
//   height = "15px",
//   className = "",
//   style = {},
// }) => {
//   // Apply the dynamic height to both the height and lineHeight styles.
//   const containerStyle: React.CSSProperties = {
//     height,
//     lineHeight: height,
//     ...style,
//   };

//   return (
//     <div
//       className={`group uppercase w-fit overflow-hidden text-center transition-all duration-300 inline-block ${className}`}
//       style={containerStyle}
//     >
//       <span className="group-hover:-top-full block h-full relative top-[0%] transition-all duration-300">
//         {text}
//       </span>
//       <span className="group-hover:-top-full block h-full relative top-[0%] transition-all duration-300">
//         {text}
//       </span>
//     </div>
//   );
// };

// export default ButtonAnimated;

interface Props {
  text: string;
  subText?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
}

const ButtonAnimated: React.FC<Props> = ({
  text,
  height = "15px",
  className = "",
  style = {},
  href,
  target,
  rel,
  subText,
}) => {
  // Combine dynamic height and line-height with any custom styles.
  const containerStyle: React.CSSProperties = {
    height,
    lineHeight: height,
    ...style,
  };

  // The animated content is the same regardless of the element type.
  const Content = () => (
    <>
      <span className="group-hover:-top-full block h-full relative top-[0%] transition-all duration-300">
        {text}
      </span>
      <span className="group-hover:-top-full block h-full relative top-[0%] transition-all duration-300">
        {subText ? subText : text}
      </span>
    </>
  );

  // If an href is provided, render an anchor tag.
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`group uppercase w-fit overflow-hidden text-center transition-all duration-300 inline-block ${className}`}
        style={containerStyle}
      >
        <Content />
      </Link>
    );
  }

  // Otherwise, render a div.
  return (
    <div
      className={`group uppercase w-fit overflow-hidden text-center transition-all duration-300 inline-block ${className}`}
      style={containerStyle}
    >
      <Content />
    </div>
  );
};

export default ButtonAnimated;
