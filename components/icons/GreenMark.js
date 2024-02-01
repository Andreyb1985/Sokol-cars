import * as React from "react";

function SvgGreenMark(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={37}
      height={36}
      {...props}
    >
      <image
        data-name="Layer 123 copy"
        width={37}
        height={36}
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
}

export default SvgGreenMark;
