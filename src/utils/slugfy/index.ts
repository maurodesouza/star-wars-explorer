const slugfy = (string: string) =>
  string
    .toLocaleLowerCase()
    .replace(/\s/g, '-')
    .replace(/[aáàä]/g, 'a')
    .replace(/[eéë]/g, 'e')
    .replace(/[iíï]/g, 'i')
    .replace(/[oóöò]/g, 'o')
    .replace(/[uüúù]/g, 'u');

export { slugfy };
