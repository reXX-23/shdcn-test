import React from "react";
import { StyleSheet, Text, View, type TextProps, type ViewProps } from "react-native";

export function Card({ style, ...props }: ViewProps) {
  return <View style={[styles.card, style]} {...props} />;
}

export function CardTitle({ style, ...props }: TextProps) {
  return <Text style={[styles.title, style]} {...props} />;
}

export function CardDescription({ style, ...props }: TextProps) {
  return <Text style={[styles.description, style]} {...props} />;
}

export function CardContent({ style, ...props }: ViewProps) {
  return <View style={[styles.content, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: "600", color: "#000000" },
  description: { marginTop: 4, fontSize: 14, color: "#6b7280" },
  content: { marginTop: 12 },
});
