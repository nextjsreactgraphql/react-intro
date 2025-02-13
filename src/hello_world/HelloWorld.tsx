type HelloWorldProps = {
  title: string;
  subtitle?: string;
};

export default function HelloWorld({ title, subtitle }: HelloWorldProps) {
  return (
    <div className={"inline-block rounded border p-4 shadow-2xl"}>
      <span className={"font-bold"}>{title}</span>
      {subtitle}
    </div>
  );
}
