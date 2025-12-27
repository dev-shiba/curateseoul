"use client";
import { useState, useCallback } from "react";

export function useClipboard(duration = 2000) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback((text: string) => {
        if (!navigator.clipboard) {
            console.warn("Clipboard not supported");
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), duration);
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    }, [duration]);

    return { copied, copyToClipboard };
}
