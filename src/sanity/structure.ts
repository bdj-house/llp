import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S => {
  const singletonListItems = [
    { title: 'Página Inicial', id: 'homePage', schemaType: 'homePage' },
    { title: 'Sobre', id: 'aboutPage', schemaType: 'aboutPage' },
    { title: 'Nosso Espaço', id: 'ourSpacePage', schemaType: 'ourSpacePage' },
    { title: 'Configurações do Site', id: 'siteSettings', schemaType: 'siteSettings' },
  ].map(item =>
    S.listItem()
      .title(item.title)
      .child(S.editor().id(item.id).schemaType(item.schemaType).documentId(item.id)),
  );

  const otherTypes = S.documentTypeListItems().filter(
    listItem =>
      !['homePage', 'aboutPage', 'ourSpacePage', 'siteSettings'].includes(
        // @ts-ignore: listItem has getId in builder
        (listItem as any).getId?.() || (listItem as any)._id || '',
      ),
  );

  return S.list()
    .title('Conteúdo')
    .items([...singletonListItems, S.divider(), ...otherTypes]);
};
