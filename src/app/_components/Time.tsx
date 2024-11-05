export default function Time(props: {
  time: string | undefined;
  isLoading?: boolean;
}) {
  const {time, isLoading} = props;

  return (
    <p>
      Current time:{' '}
      {isLoading
        ? '...'
        : time && (
            <time>
              {new Intl.DateTimeFormat('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              }).format(new Date(time))}
            </time>
          )}
    </p>
  );
}
