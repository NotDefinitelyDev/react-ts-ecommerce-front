import type { TLoading } from "@customTypes/shared";

interface ILoadingProps {
  state: TLoading;
  error: null | string;
  children: React.JSX.Element;
}

const Loading = ({ children, state, error }: ILoadingProps) => {
  if (state === "pending") {
    return <div>Loading please wait...</div>;
  }
  if (state === "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
