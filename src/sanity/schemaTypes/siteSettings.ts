const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'],
  fields: [
    { name: 'siteName', title: 'Nome do site', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Telefone', type: 'string' },
    { name: 'businessHours', title: 'Horário de atendimento', type: 'string' },
    {
      name: 'address',
      title: 'Endereço',
      type: 'object',
      fields: [
        { name: 'street', title: 'Rua', type: 'string' },
        { name: 'city', title: 'Cidade', type: 'string' },
        { name: 'state', title: 'Estado', type: 'string' },
        { name: 'postalCode', title: 'CEP', type: 'string' },
        { name: 'country', title: 'País', type: 'string' },
      ],
    },
    {
      name: 'social',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
      ],
    },
    {
      name: 'googleMapUrl',
      title: 'URL do Mapa (Google Maps Embed)',
      type: 'url',
    },
  ],
};

export default siteSettingsSchema;
