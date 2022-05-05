import { DataBase } from './types/data.types';

enum ContactsDataVariant {
  PHONE = 'phone',
  EMAIL = 'email',
  EXTERNAL_LINK = 'external_link',
  TEXT = 'text',
}

interface ContactsDataWithoutLink {
  name: string;
  variant: ContactsDataVariant.TEXT;
  url?: never;
  value: string;
}

interface ContactsDataWithLink {
  name: string;
  variant:
    | ContactsDataVariant.PHONE
    | ContactsDataVariant.EMAIL
    | ContactsDataVariant.EXTERNAL_LINK;
  url: string;
  value: string;
}

type ContactsDataType = ContactsDataWithLink | ContactsDataWithoutLink;

interface ContactsData extends DataBase<ContactsDataType> {}

export const contactsData: ContactsData[] = [
  {
    title: 'Contacts info',
    data: [
      {
        name: 'Phone',
        variant: ContactsDataVariant.PHONE,
        url: 'tel:+380974969209',
        value: '+38 097 496 92 09',
      },
      {
        name: 'Email',
        variant: ContactsDataVariant.EMAIL,
        url: 'mailto:slava.kirshman@gmail.com',
        value: 'slava.kirshman@gmail.com',
      },
      {
        name: 'Skype',
        variant: ContactsDataVariant.TEXT,
        value: 'slava.kirshman',
      },
      {
        name: 'Twitter',
        variant: ContactsDataVariant.EXTERNAL_LINK,
        url: 'https://twitter.com/KirshmanSlava',
        value: '@KirshmanSlava',
      },
      {
        name: 'GitHub',
        variant: ContactsDataVariant.EXTERNAL_LINK,
        url: 'https://github.com/sixnames',
        value: 'sixnames',
      },
    ],
  },
];
