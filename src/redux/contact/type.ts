type ContactType = {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  message: string;
  created_at: Date;
  updated_at: Date;
};

type ContactResponseType = {
  total: number;
  next: string | null;
  previous: string | null;
  results: ContactType[];
  pages: number;
};
export type { ContactResponseType };
