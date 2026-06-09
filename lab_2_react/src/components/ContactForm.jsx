import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 6000); 

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full relative">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-red-500 text-xl font-bold"
                >
                    &times;
                </button>
                
                <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Зворотній зв'язок</h2>
                
                <form action="https://formspree.io/f/xbdbvyqq" method="POST" className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Ім'я</label>
                        <input type="text" name="name" required className="mt-1 w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input type="email" name="email" required className="mt-1 w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Номер телефону</label>
                        <input type="tel" name="phone" className="mt-1 w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Повідомлення</label>
                        <textarea name="message" rows="4" required className="mt-1 w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
                        Відправити
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;