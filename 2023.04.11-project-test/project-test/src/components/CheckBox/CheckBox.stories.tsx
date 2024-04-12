// Checkbox.stories.tsx

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./CheckBox";

export default {
    title: "Design System/Checkbox",
    component: Checkbox,
    argTypes: {
        onChange: { action: "changed" },
    },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Checkbox Label",
};

export const Checked = Template.bind({});
Checked.args = {
    label: "Checked Checkbox",
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Checkbox",
    disabled: true,
};

export const Large = Template.bind({});
Large.args = {
    label: "Large Checkbox",
    size: "large",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
    label: "Custom Color Checkbox",
    color: "red",
};
