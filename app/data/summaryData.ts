import { DataBase } from './types/data.types';

interface SummaryDataType {
  title: string;
  content: string;
}
interface SummaryData extends DataBase<SummaryDataType> {}

export const summaryData: SummaryData[] = [
  {
    title: 'Slava Kirshman',
    data: [
      {
        title: 'Summary',
        content: 'Full-stack developer with a passion for building web applications.',
      },
    ],
  },
];
