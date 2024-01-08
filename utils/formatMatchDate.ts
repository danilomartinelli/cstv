import { format, formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatMatchDate(rawDate: string) {
    const date = parseISO(rawDate);
    const now = new Date();

    if (format(date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')) {
        return `Hoje, ${format(date, 'HH:mm')}`;
    }

    if (format(date, 'yyyy-MM-dd') === format(new Date(now.setDate(now.getDate() - 1)), 'yyyy-MM-dd')) {
        return `Ontem, ${format(date, 'HH:mm')}`;
    }

    if (format(date, 'yyyy-MM-dd') === format(new Date(now.setDate(now.getDate() + 1)), 'yyyy-MM-dd')) {
        return `Amanhã, ${format(date, 'HH:mm')}`;
    }

    if (date.getTime() < now.getTime() + 7 * 24 * 60 * 60 * 1000) {
        return formatRelative(date, now, { locale: ptBR });
    }

    return format(date, 'dd.MM HH:mm');
}
