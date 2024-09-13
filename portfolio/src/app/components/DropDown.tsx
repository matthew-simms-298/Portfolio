"use client";

import Button from "@/app/components/dropdown/DropDownButton";
import Contents from "@/app/components/dropdown/DropDownContents";

export default function DropDown() {
  return (
    <details className="dropdown z-30 fixed top-5 left-5 md:hidden">
      <Button/>
      <Contents/>
    </details>
  );
}
