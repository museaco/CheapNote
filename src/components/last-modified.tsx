import dayjs from 'dayjs';

export default function LastModified({ time }: { time?: Date, }) {
  if (!time) return;
  return (
    <div className="text-sm text-fd-muted-foreground">
      最后更新时间：{dayjs(time).format('YYYY/MM/DD')}
    </div>
  );

}
