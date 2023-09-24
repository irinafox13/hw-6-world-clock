type timeProps = {
  time: string
}

const Clock = ({time}: timeProps) => {
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;