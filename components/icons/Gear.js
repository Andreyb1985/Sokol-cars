import * as React from "react";

function SvgGear(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M18.5 7.938c-.063-.313-.375-.5-.688-.5-.75.125-1.5-.25-1.875-.938-.374-.625-.312-1.5.126-2.063.187-.25.187-.625-.063-.812a8.539 8.539 0 00-3.5-2c-.313-.063-.625.063-.75.375a1.923 1.923 0 01-3.5 0c-.125-.313-.438-.5-.75-.375A8.022 8.022 0 004 3.688c-.25.187-.25.562-.063.812.438.625.5 1.438.126 2.063-.375.625-1.125 1-1.875.937-.313-.063-.626.188-.688.5-.188.625-.25 1.313-.25 2 0 .688.063 1.375.25 2.063.063.312.375.5.688.437.75-.125 1.5.25 1.874.938.375.624.313 1.5-.125 2.062-.187.25-.187.625.063.813C5 17.25 6.25 18 7.563 18.375c.312.063.625-.063.75-.375a1.923 1.923 0 013.5 0c.124.25.312.375.562.375h.188c1.312-.375 2.562-1.125 3.562-2.063.25-.25.25-.562.063-.812-.438-.625-.5-1.438-.125-2.063.375-.624 1.125-1 1.875-.937.312.063.625-.188.687-.5.188-.688.25-1.375.25-2.063 0-.687-.188-1.312-.375-2zM10 12.5A2.507 2.507 0 017.5 10c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5-1.125 2.5-2.5 2.5zm0 0" />
    </svg>
  );
}

export default SvgGear;
