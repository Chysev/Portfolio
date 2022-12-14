import React, { useState, useEffect } from "react";

// Themes and Icons
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Switcher = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const RenderThemeChanger = () => {

        let [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        const currentTheme = theme === "system" ? systemTheme : theme;
        if (currentTheme === "dark") {
            if (!mounted) return null;
            return (
                <MoonIcon
                    className="h-7 w-7"
                    role="button"
                    onClick={() => setTheme("light")}
                />
            );
        } else {
            return (
                <SunIcon
                    className="h-7 w-7"
                    role="button"
                    onClick={() => setTheme("dark")}
                />
            );
        }
    };
    return <div>{RenderThemeChanger()}</div>;
};

export default Switcher;