// context/NotificationContext.tsx
import React, { createContext, useContext, useState } from 'react';

export type Notification = {
    id: string;
    name: string;
    visualized: boolean;
};

type NotificationContextType = {
    notifications: Notification[];
    setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
    hasNewNotifications: boolean;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = React.useState<Notification[]>([
        { id: '1', name: '🔔 Nova aula disponível!', visualized: false },
        { id: '2', name: '📅 Evento começa em 2h!', visualized: true },
        { id: '3', name: '📢 Seu amigo comentou sua resposta.', visualized: false },
        { id: '4', name: '📝 Prova simulada liberada.', visualized: true },
        { id: '5', name: '📌 Notificação de sistema.', visualized: false },
        { id: '6', name: '📚 Novo material adicionado.', visualized: true },
        { id: '7', name: '📈 Seu progresso foi atualizado.', visualized: false },
        { id: '8', name: '🎯 Meta semanal alcançada!', visualized: true },
        { id: '9', name: '💬 Mensagem recebida de @Ana.', visualized: false },
        { id: '10', name: '📥 Feedback do professor disponível.', visualized: true },
        { id: '11', name: '🎓 Certificado disponível para download.', visualized: false },
        { id: '12', name: '⏰ Lembrete: atividade vence amanhã.', visualized: false },
        { id: '13', name: '🔒 Sua conta foi acessada de outro dispositivo.', visualized: true },
        { id: '14', name: '💬 Mensagem recebida de @Ana.', visualized: false },
        { id: '15', name: '📥 Feedback do professor disponível.', visualized: true },
        { id: '16', name: '🎓 Certificado disponível para download.', visualized: false },
        { id: '17', name: '⏰ Lembrete: atividade vence amanhã.', visualized: false },
        { id: '18', name: '🔒 Sua conta foi acessada de outro dispositivo.', visualized: true },
    ]);

    const hasNewNotifications = notifications.some(n => !n.visualized);

    return (
        <NotificationContext.Provider value={{ notifications, setNotifications, hasNewNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error('useNotifications must be used within NotificationProvider');
    return context;
};
