export type ShowWhenProps = {
  condition: boolean;
  children: React.ReactNode;
};

const ShowWhen = ({ condition, children }: ShowWhenProps) =>
  condition ? <>{children}</> : null;

export { ShowWhen };
