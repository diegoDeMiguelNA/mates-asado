import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectLabel, SelectValue } from "@radix-ui/react-select";
import React from "react";

type MedicosSelectorProps = {
  value: string | undefined;
  onChange: (newVal: string) => void;
  specialties: string[];
  selectedSpecialty?: string;
};

export default function MedicosSelector({
  value,
  onChange,
  specialties,
}: MedicosSelectorProps) {
  return (
    <div className="mb-4 text-left max-w-[150px]">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={"Specialties"} />
        </SelectTrigger>
        <SelectContent  className="text-center flex justify-center items-center">
          <SelectGroup>
            {specialties.map((specialty) => (
              <SelectItem key={specialty} value={specialty}>
                {specialty}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
