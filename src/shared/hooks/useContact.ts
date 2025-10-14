import { useCallback } from 'react';

export const useContact = () => {
  const goToContact = useCallback(({ message }: { message?: string } = {}) => {
    const phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE;
    const messageToSend = message || 'Olá, sou um visitante do site!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageToSend)},`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  }, []);

  return { goToContact };
};
