import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import clsx from "clsx";
import React from "react";

type MedicosSelectorProps = {
  value: string | undefined;
  onChange: (newVal: string) => void;
  dropdownItems: string[];
  selectedSpecialty?: string;
  placeholder?: string;
  translateFn: (item: string) => string;
  className?: string;
};

export default function MedicosSelector({
  value,
  onChange,
  dropdownItems,
  placeholder = "",
  translateFn,
  className,
}: MedicosSelectorProps) {
  return (
    <div className={clsx("mb-4 pb-4 text-left", className)}>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="flex justify-around">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="text-center flex justify-center items-center">
          <SelectGroup className="ml-0">
            <SelectItem key="no-option" value="">
              <span className="font-bold text-sm">{"Sin filtrar"}</span>
            </SelectItem>
            {dropdownItems.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {translateFn(specialty)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
