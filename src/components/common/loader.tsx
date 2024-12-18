import { LoaderCircle } from 'lucide-react';

interface LoadingProps {
  title?: string;
  message?: string;
}

export const Loading: React.FC<LoadingProps> = (props) => {
  const { title, message } = props;
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <LoaderCircle className="stroke-primary motion-safe:animate-spin-slow" size={50} />
        <div className="text-center">
          {!!title && <h3 className="capitalize text-xl font-medium">{title}</h3>}
          {!!message && <span className="capitalize text-sm">{message}</span>}
        </div>
      </div>
    </main>
  );
};
