export type SWAPIEntity = Record<string, string | string[]> & {
  name?: string;
  title?: string;
  url: string;
};

export type SWAPIGetAllResponse = {
  results: SWAPIEntity[];
};
