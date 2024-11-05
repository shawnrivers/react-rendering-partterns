export default function Greeting(props: {
  name: string | undefined;
  isLoading?: boolean;
}) {
  const {name, isLoading} = props;
  return <p>Hello, {isLoading ? '...' : name}!</p>;
}
