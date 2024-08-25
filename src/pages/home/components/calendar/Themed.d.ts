// src/pages/home/components/calendar/Themed.d.ts
import React from "react";

interface ThemedDatePickerProps {
  selected: Date | undefined;
  onChange: (date: Date | null) => void;
  className?: string;
}

declare const ThemedDatePicker: React.FC<ThemedDatePickerProps>;

export default ThemedDatePicker;
