import { useEffect, useState } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState(() => {
        return localStorage.getItem('systemData') || 'Отримання даних...';
    });

    useEffect(() => {
        const platform = navigator.platform;
        const userAgent = navigator.userAgent;
        const info = `Platform: ${platform}, Agent: ${userAgent}`;

        localStorage.setItem('systemData', info);

        const timer = setTimeout(() => {
            setSystemInfo(info);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-6 text-center text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
            <p>&copy; 2026 Volodymyr Kravchuk. Всі права захищено.</p>
            <p className="mt-2 text-xs opacity-70">
                System Info (from localStorage): {systemInfo}
            </p>
        </footer>
    );
}

export default Footer;