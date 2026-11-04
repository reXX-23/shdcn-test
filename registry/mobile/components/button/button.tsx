import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

type ButtonProps = Omit<PressableProps, "style"> & {
  label: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  style?: StyleProp<ViewStyle>;
};

export function Button({
  label,
  variant = "default",
  size = "default",
  disabled,
  style,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variantStyles[variant],
        sizeStyles[size],
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, textStyles[variant]]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  default: {
    backgroundColor: "#000000",
  },
  outline: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  sizeDefault: { height: 48, paddingHorizontal: 20 },
  sizeSm: { height: 40, paddingHorizontal: 16 },
  sizeLg: { height: 56, paddingHorizontal: 28 },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.5 },
  text: { fontSize: 16, fontWeight: "600" },
  textDefault: { color: "#ffffff" },
  textOutline: { color: "#000000" },
});

const variantStyles = {
  default: styles.default,
  outline: styles.outline,
};

const sizeStyles = {
  default: styles.sizeDefault,
  sm: styles.sizeSm,
  lg: styles.sizeLg,
};

const textStyles = {
  default: styles.textDefault,
  outline: styles.textOutline,
};
