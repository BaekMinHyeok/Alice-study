// Checkbox.tsx

import React, { useState } from "react";

export interface CheckboxProps {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    disabled = false,
    onChange,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked);

    const handleChange = () => {
        if (!disabled) {
            const newChecked = !isChecked;
            setIsChecked(newChecked);
            if (onChange) {
                onChange(newChecked);
            }
        }
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
            />
            {label}
        </label>
    );
};

export default Checkbox;
